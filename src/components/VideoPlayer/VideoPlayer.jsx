import React from 'react';
import video from '@/assets/college-video.mp4';
import './VideoPlayer.css';
import { useRef } from 'react';

export const VideoPlayer = ({playState, setPlayState}) => {

  const player = useRef(null);

  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false)
    }
  }

  return (
    <div className={`video-player ${playState ? '': 'hide'}`} ref={player} onClick={closePlayer}>
      <video className="video-player__source" src={video} controls preload="metadata">
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
