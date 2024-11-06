'use client'

import "./MediaPlayer.css";
import { useState } from 'react';


function MediaPlayer() {

  const [isPlaying, setIsPlaying] = useState(true)

  const handlePlayClick = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <>
      mediaPlayer
    </>
  );
}

export default MediaPlayer;
