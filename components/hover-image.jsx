import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CirclePlay, CirclePause } from 'lucide-react';

const HoverImage = ({ src, index, isPlaying, onPlay, onStop }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (isPlaying) {
      onStop();
    } else {
      onPlay();
    }
  };

  return (
    <div
      className="relative marquee-item"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="hover-container">
        <picture className="marquee-picture" style={{ backgroundColor: '#93c12b' }}>
          <img className="marquee-picture-img" src={src} alt="" />
        </picture>
        <div className="hover-content">
          {isHovered && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <Button 
                variant="secondary"
                className="rounded-[20px] bg-white text-black font-bold" 
                onClick={handleClick}
              >
                {isPlaying ? 'Stop' : 'Listen now'}
                {isPlaying ? <CirclePause className="h-4 w-4 ml-2" /> : <CirclePlay className="h-4 w-4 ml-2" />}
              </Button>
            </div>
          )}
        </div>
      </div>
      <div className="top-charts-copy typography-tile-caption">
        <p className="show-title">History</p>
        <p className="station">Series</p>
      </div>
    </div>
  );
};

export default HoverImage;