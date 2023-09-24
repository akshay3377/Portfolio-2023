import React, { useState, useRef } from "react";
import { MicIcon, MicPauseIcon } from "../icons";

const AudioPlayer = ({ src }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <audio ref={audioRef} src={src} />
      <button onClick={handlePlayPause}>
        {isPlaying ? <MicPauseIcon /> : <MicIcon />}
      </button>
    </div>
  );
};

export default AudioPlayer;
