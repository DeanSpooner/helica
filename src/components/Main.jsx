import React, { useState, useEffect } from "react";
import Gamebox from "./Gamebox";
import moonlight from "../assets/audio/moonlight.mp3";
import musicIcon from "../assets/icons/music.png";
import pauseIcon from "../assets/icons/pause.png";
import Sound from "react-sound";
import {
  Title,
  StartButton,
  MainContainer,
  MusicToggle,
  StartButtonContainer,
} from "./Main.styles";

const Main = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [started, setStarted] = useState(false);
  const [gameboxDisplay, setGameboxDisplay] = useState(false);

  useEffect(() => {
    if (started) {
      setTimeout(() => {
        setGameboxDisplay(true);
      }, 2000);
    }
  }, [started]);

  return (
    <div className="main">
      <Sound
        url={moonlight}
        playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.pause}
        loop={true}
      />
      <Title>Helica</Title>
      <MainContainer started={started}>
        <StartButtonContainer started={started}>
          <StartButton started={started} onClick={() => setStarted(!started)}>
            Start
          </StartButton>
        </StartButtonContainer>
        {gameboxDisplay && <Gamebox isPlaying={isPlaying} />}
      </MainContainer>
      <MusicToggle
        isPlaying={isPlaying}
        onClick={() => {
          setIsPlaying(!isPlaying);
          isPlaying ? moonlight.pause() : moonlight.play();
        }}
      >
        {!isPlaying ? (
          <img src={musicIcon} alt="Play icon" />
        ) : (
          <img src={pauseIcon} alt="Pause icon" />
        )}
      </MusicToggle>
    </div>
  );
};

export default Main;
