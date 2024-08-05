import React from "react";
import { cn } from "@/lib/utils";
import { Loader2, Pause, Play } from "lucide-react";
import { useGlobalAudioPlayer } from "react-use-audio-player";
import { Slider, SliderRange, SliderThumb, SliderTrack } from "@/components/player-slider";
import { useCurrentSongIndex, useIsPlayerInit, useQueue } from "@/lib/hooks/use-store";

export function formatDuration(seconds, format) {
  const date = new Date(seconds * 1000);
  return format === "hh:mm:ss" ? date.toISOString().slice(11, 19) : date.toISOString().slice(14, 19);
}

export function Player({ playlists, className, ...props }) {
  const [isPlayerInit, setIsPlayerInit] = useIsPlayerInit();
  const frameRef = React.useRef();
  const [pos, setPos] = React.useState(0);

  const {
    load,
    stop,
    playing,
    togglePlayPause,
    getPosition,
    isLoading,
    duration,
    loop,
    looping,
    mute,
    muted,
    volume,
    setVolume,
    seek,
    isReady,
  } = useGlobalAudioPlayer();

  React.useEffect(() => {
    const animate = () => {
      setPos(getPosition());
      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = window.requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [getPosition]);

  React.useEffect(() => {
    if (isPlayerInit) {
      const audioSrc = "/sound/sample.mp3";
      load(audioSrc, {
        html5: true,
        autoplay: true,
        initialMute: false,
        onload: () => {
          mute(false);
        },
      });
    } else {
      stop();
    }
  }, [isPlayerInit]); // eslint-disable-line react-hooks/exhaustive-deps

  function playPauseHandler() {
    if (isPlayerInit) {
      togglePlayPause();
    } else {
      setIsPlayerInit(true);
    }
  }

  return (
    <div className="flex md:px-20 md:justify-center md:items-center">
      <div
        className={cn(
          "flex flex-col bg-white/50 overflow-hidden rounded-xl h-auto min-h-16",
          "md:w-[1053px] md:h-[96px]",
          "w-full",
          className
        )}
        {...props}
      >
        <div className="flex flex-row flex-1 content-between items-center p-2">
          <div className="w-full md:w-8 flex flex-1 items-center relative overflow-hidden">
            <img
              src="https://cdn2.suno.ai/4b140a9e-964b-422c-85b5-5861ad1a9d38_12f50fcb.jpeg?width=100"
              loading="lazy"
              className="rounded-md w-10 h-16 md:h-14 mr-2 object-cover cursor-pointer"
              alt="Cover image for Once"
              aria-label="Playbar: Cover image for Once"
            />
            <div className="w-full md:w-auto relative flex flex-col pr-2">
              <div className="relative w-fit flex overflow-x-hidden text-sm font-medium hover:underline cursor-pointer">
                <div className="animate-marquee md:animate-none">
                  <a className="whitespace-nowrap mr-24" aria-label="Playbar: Title for Once" href="/song/4b140a9e-964b-422c-85b5-5861ad1a9d38">
                    Once
                  </a>
                </div>
                <div className="absolute top-0 animate-marquee2 md:animate-none">
                  <a className="whitespace-nowrap mr-24 md:hidden" aria-label="Playbar: Title for Once" href="/song/4b140a9e-964b-422c-85b5-5861ad1a9d38">
                    Once
                  </a>
                </div>
                <div className="absolute right-0 w-full bg-gradient-to-r from-transparent via-quaternary md:hidden to-quaternary h-full"></div>
              </div>
              <span className="text-sm font-medium flex flex-col md:flex-row">
                <a className="relative w-full md:w-fit flex hover:underline" aria-label="Playbar: Artist for Once" href="/@ian">
                  <span className="lg:max-w-[150px] line-clamp-1 w-full">IO</span>
                </a>
              </span>
            </div>
          </div>
          <div className="flex-1 flex-row w-8 justify-center gap-4 hidden md:flex">
            <button aria-label={playing ? "Pause" : "Play"} onClick={playPauseHandler}>
              {isLoading ? (
                <Loader2 className="animate-spin" />
              ) : playing ? (
                <Pause className="size-6" />
              ) : (
                <Play className="size-6" fill="currentColor" />
              )}
            </button>
          </div>
          <div className="flex md:flex-1 flex-row-reverse gap-1 w-fit items-left justify-right md:pr-2">
            <div className="w-fit h-auto flex flex-col p-2 items-center gap-4">
              <button className="md:hidden" aria-label={playing ? "Pause" : "Play"} onClick={playPauseHandler}>
                {isLoading ? (
                  <Loader2 className="animate-spin" />
                ) : playing ? (
                  <Pause className="size-6" />
                ) : (
                  <Play className="size-6" fill="currentColor" />
                )}
              </button>
              <span className="whitespace-nowrap flex items-center">
                {formatDuration(pos, pos > 3600 ? "hh:mm:ss" : "mm:ss")} / {formatDuration(duration, duration > 3600 ? "hh:mm:ss" : "mm:ss")}
              </span>
            </div>
          </div>
        </div>

        <div className="p-1"> {/* Adjusted padding for slider visibility */}
          <Slider value={[pos]} max={duration} onValueChange={([values]) => {
            seek(values);
            setPos(values);
          }}>
            <SliderTrack className="h-2 cursor-pointer bg-gray-300">
              <SliderRange className="bg-gray-500" />
            </SliderTrack>
          </Slider>
        </div>
      </div>
    </div>
  );
}
