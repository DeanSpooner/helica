import React, { useState, useEffect } from "react";
import Gamebox from "./Gamebox";
import moonlight from "../assets/audio/music/moonlight.mp3";
import explorer from "../assets/audio/music/explorer.mp3"
import stranger from "../assets/audio/music/stranger.mp3"
import search from "../assets/audio/music/search.mp3"
import mystery from "../assets/audio/music/mystery.mp3"
import woods from "../assets/audio/music/woods.mp3"
import battle from "../assets/audio/music/battle.mp3"
import tension from "../assets/audio/music/tension.mp3"
import crash from "../assets/audio/sfx/crash.mp3"
import steps from "../assets/audio/sfx/steps.mp3"
import knock from "../assets/audio/sfx/knock.mp3"
import thud from "../assets/audio/sfx/thud.mp3"
import musicIcon from "../assets/icons/music.png";
import pauseIcon from "../assets/icons/pause.png";
import choices from "../assets/json/choices.json";
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
  const [currentMusic, setCurrentMusic] = useState(null);
  const [currentSfx, setCurrentSfx] = useState(null);
  const [currentFlag, setCurrentFlag] = useState(0);
  const [upcomingFlag, setUpcomingFlag] = useState('0a');

  useEffect(() => {
    if (started) {
      setTimeout(() => {
        setGameboxDisplay(true);
      }, 2000);
    }
  }, [started]);

  useEffect(() => {
    if (choices[currentFlag].music) {
      choices[currentFlag].music === "null" && setCurrentMusic(null);
      choices[currentFlag].music === "moonlight" && setCurrentMusic(moonlight);
      choices[currentFlag].music === "explorer" && setCurrentMusic(explorer);
      choices[currentFlag].music === "stranger" && setCurrentMusic(stranger);
      choices[currentFlag].music === "search" && setCurrentMusic(search);
      choices[currentFlag].music === "mystery" && setCurrentMusic(mystery);
      choices[currentFlag].music === "woods" && setCurrentMusic(woods);
      choices[currentFlag].music === "battle" && setCurrentMusic(battle);
      choices[currentFlag].music === "tension" && setCurrentMusic(tension);
   }
  }, [currentFlag]);

  useEffect(() => {
    if (choices[currentFlag].sfx && isPlaying) {
      choices[currentFlag].sfx === "null" && setCurrentSfx(null);
      choices[currentFlag].sfx === "crash" && setCurrentSfx(crash);
      choices[currentFlag].sfx === "steps" && setCurrentSfx(steps);
      choices[currentFlag].sfx === "knock" && setCurrentSfx(knock);
      choices[currentFlag].sfx === "thud" && setCurrentSfx(thud);
   }
  }, [currentFlag, isPlaying]);

  return (
    <div className="main">
        <Sound
          url={currentMusic}
          playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.pause}
          loop={true}
        />
        <Sound url={currentSfx} 
        playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.pause}
        loop={false}
        />
      <Title>Helica</Title>
      <MainContainer started={started}>
        {!gameboxDisplay && (
          <StartButtonContainer started={started}>
            <StartButton started={started} onClick={() => setStarted(!started)}>
              Start
            </StartButton>
          </StartButtonContainer>
        )}
        {gameboxDisplay && <Gamebox isPlaying={isPlaying} choices={choices} currentFlag={currentFlag} setCurrentFlag={setCurrentFlag} upcomingFlag={upcomingFlag} setUpcomingFlag={setUpcomingFlag}/>}
      </MainContainer>
      <MusicToggle
        isPlaying={isPlaying}
        onClick={() => {
          setIsPlaying(!isPlaying);
          currentMusic !== null && isPlaying ? currentMusic.pause() : currentMusic.play();
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
