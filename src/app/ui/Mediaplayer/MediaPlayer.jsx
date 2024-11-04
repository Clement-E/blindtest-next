import "./MediaPlayer.css";
import IconButton from "@mui/material/Box";
import placeholder from "../../assets/placeholder.png"
import {
  SkipPreviousRounded,
  SkipNextRounded,
  PauseCircleFilled,
  PlayCircleFilled,
} from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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
