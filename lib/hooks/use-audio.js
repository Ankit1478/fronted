'use client';

/**
 * Notes: AudioContexts must be assigned and their resume function must be called
 *        before fetching array buffers for AudioBuffer or audio won't play on
 *        mobile Safari.
 * 
 *        AudioContext.onstatechange is buggy on mobile Safari when working with
 *        multiple instances of AudioContext.
 */

import React, { useEffect, useRef, useState } from 'react';

import { useSidebar } from '@/lib/hooks/use-sidebar';

const freeBgm = `sounds/free/Free-0.mp3`;

const numFilesBgm = {
  free: 2,
  calm: 12,
  adventurous: 5,
  emotional: 8,
  happy: 5,
  magical: 6,
  nature: 10,
  piano: 7,
};

const AudioContext = React.createContext(
  undefined
);

export function useAudio(id) {
  const context = React.useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within a AudioProvider');
  }
  return context;
}

export function AudioProvider({ children }) {
  const { setUpgrading, narrator } = useSidebar();

  const [playCalled, setPlayCalled] = useState(null);
  const [content, setContent] = useState();
  const [duration, setDuration] = useState(0);
  const [durationBgm, setDurationBgm] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioContextRef = useRef(null);
  const audioContextBgmRef = useRef(null);
  const sourceRef = useRef(null);
  const sourceBgmRef = useRef();
  const startTimeRef = useRef(0);
  const offsetRef = useRef(0);
  const gainNodeRef = useRef(null);
  const [sliderChanged, setSliderChanged] = useState(false); // Variable to track slider changes

  const [playingAudio, setPlayingAudio] = useState(null);
  const [bgm, setBgm] = useState(null);

  const bgmPath = (bgm) => bgm ? `sounds/${bgm.split('-')[0]}/${bgm.charAt(0).toUpperCase() + bgm.substring(1).toLowerCase()}.mp3` : freeBgm;


  const stopAudio = () => {

  };

  const handleBgmChange = (id) => {
    
  };

  const playBgm = async (id) => {
    
  };

  const playSample = async (id) => {
    
  };

  const playSound = async (id) => {
    
  };

  const handleSliderChange = (value, id) => {

  };

  return (
    <AudioContext.Provider
      value={{
        playing: (id) => playingAudio && playingAudio == id,
        playSound,
        playBgm,
        playSample,
        playCalled: (id) => playCalled && playCalled == id,
        handleSliderChange,
        handleBgmChange,
        currentTime: (id) => audioContextRef.current?.id == id ? currentTime : 0,
        duration: (id) => audioContextRef.current?.id == id ? duration : 0,
        bgm,
        setContent,
        stopAudio,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}