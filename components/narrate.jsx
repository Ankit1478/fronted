'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from './ui/button'

import { 
    Play,
    CircleStop,
  } from 'lucide-react'
import { ReloadIcon } from "@radix-ui/react-icons"
import { NarrateSlider } from './chat-narrate-slider';

export function Narrate({
  narIndex,
  curIndex,
  setCurIndex,
}) {
    const [playCalled, setPlayCalled] = useState(false)
    const [playing, setPlaying] = useState(false)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const sourceRef = useRef(null)
    const [audioContext, setAudioContext] = useState(null)

    const playSound = async () => {
        setCurIndex(narIndex)

        if (playCalled) {
            return
        }

        setPlayCalled(true)

        if (playing) {
          if (audioContext) {
            audioContext.suspend();
          }
          else {
            setPlaying(false)
          }
        }
        else {
          if (audioContext) {
            audioContext.resume();
          }
          else {
              const response = await fetch("/sound/sample.mp3");
              const buffer = await response.arrayBuffer();
              const atx = new (window.AudioContext || window.webkitAudioContext);
              
              atx.onstatechange = function(c, e) {
                if (atx) {
                  setPlaying(atx.state  == 'running');
                }
              };
              atx.decodeAudioData(buffer)
              .then(function(decodedBuffer) {
                const source = atx.createBufferSource();
                source.buffer = decodedBuffer;
                source.connect(atx.destination);
		            sourceRef.current = source
                source.onended = function() {
                  atx.close();
                  setAudioContext(null);
                  setPlaying(false);
		              setCurrentTime(0)
                };
		            setDuration(decodedBuffer.duration)
                source.start(0, currentTime);
              })
              .catch(function(error) {
                console.error('Error decoding audio data:', error);
                setAudioContext(null);
                setPlaying(false);
              });
              setPlayCalled(false)
              setAudioContext(atx);
          }
        }

        setPlayCalled(false)
      }

    const playStop = async () => {
      if (audioContext) {
        audioContext.suspend();
      }
      else {
        setPlaying(false)
      }

      setPlayCalled(false)
    }

    const handleSliderChange = (value) => {
      if (audioContext && sourceRef.current) {
        const seekTime = (value[0] / 100) * duration
        sourceRef.current.stop()  // Stop current audio
        sourceRef.current.start(0, seekTime)  // Restart audio at seekTime
        setCurrentTime(seekTime)
      }
    }
    
    useEffect(() => {
      if (curIndex != narIndex) {
        playStop()
      }
    }, [curIndex])
  
    useEffect(() => {
      let interval
      if (playing && audioContext) {
        interval = setInterval(() => {
          setCurrentTime(audioContext.currentTime)
        }, 1000)
      } else if (!playing) {
        clearInterval(interval)
      }
      return () => clearInterval(interval)
    }, [playing])

    const formatTime = (time) => {
      const minutes = Math.floor(time / 60)
      const seconds = Math.floor(time % 60)
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
    }

  return (
    <div className="w-full mt-5">
      <h3 className='text-base'>Dennis and Jason's tasty Adventure</h3>
      <div className="w-full flex justify-center h-[60px] mt-5">
        <div className="w-[400px] rounded-full bg-slate-300 flex items-center">
          <Button
            className="rounded-full p-1 ml-3 my-auto bg-slate-300"
            onClick={playSound}
            disabled={playCalled}
            size="icon"
          >
            {playCalled ? (
              <ReloadIcon className="ml-2 h-4 w-4 animate-spin" color='black' />
            ) : playing ? (
              <CircleStop className="ml-2 h-4 w-4" color='black' />
            ) : (
              <Play className="ml-2 h-4 w-4" color='black' />
            )}
          </Button>
          <div className="flex-grow mr-2 relative">
            <div className='absolute text-black text-xs -top-5 left-2'>Narrate</div>
            <NarrateSlider
              value={[currentTime ? (currentTime / duration) * 100 : 0]}
              onValueChange={handleSliderChange}
              max={100}
              step={0.1}
            />
          </div>
          <div className="text-black mr-4 text-sm">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
        </div>
      </div>
    </div>
  )
}