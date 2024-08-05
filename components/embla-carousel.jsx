"use client";

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import HoverImage from './hover-image';
import { useIsPlayerInit } from "@/lib/hooks/use-store";
import { cn } from '@/lib/utils';

const EmblaCarousel = (props) => {
  const [isPlayerInit, setIsPlayerInit] = useIsPlayerInit();
  const [isPlaying, setIsPlaying] = useState(false);
  const [playingIndex, setPlayingIndex] = useState(null);

  const { slides, options, className } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true, speed: 0.8 })
  ]);

  const stopAutoplay = useCallback(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (autoScroll && autoScroll.isPlaying()) {
      autoScroll.stop();
    }
  }, [emblaApi]);

  const startAutoplay = useCallback(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (autoScroll && !autoScroll.isPlaying()) {
      autoScroll.play();
    }
  }, [emblaApi]);

  const handleAudioPlay = (index) => {
    setPlayingIndex(index);
    setIsPlaying(true);
    stopAutoplay(); // Stop the carousel when audio starts playing
  };

  const handleAudioStop = () => {
    setPlayingIndex(null);
    setIsPlaying(false);
    startAutoplay(); // Resume the carousel when audio stops
  };

  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;

    setIsPlaying(autoScroll.isPlaying());
    emblaApi
      .on('autoScroll:play', () => setIsPlaying(true))
      .on('autoScroll:stop', () => setIsPlaying(false))
      .on('reInit', () => setIsPlaying(autoScroll.isPlaying()));
  }, [emblaApi]);

  return (
    <div className={cn("embla", className)}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <HoverImage 
                src="https://is1-ssl.mzstatic.com/image/thumb/Podcasts122/v4/5f/16/9c/5f169c87-1e3d-b9eb-fd01-38e154c62e8f/mza_8949828061767787292.jpg/195x195bb.jpg" 
                index={index}
                isPlaying={playingIndex === index}
                onPlay={() => handleAudioPlay(index)}
                onStop={handleAudioStop}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;