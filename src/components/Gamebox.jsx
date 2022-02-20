import React, { useState, useEffect } from "react";
import {
  GameContainer,
  Choices,
  GameText,
  ClickIcon,
  LeftChoice,
  MainText,
  RightChoice,
} from "./Gamebox.styles";
import Typewriter from "typewriter-effect";
import useSound from "use-sound";
import clickSound from "../assets/audio/click.mp3";
import choices from "../assets/json/choices.json";
import handIcon from "../assets/icons/hand.png";

const Gamebox = (isPlaying) => {
  const [currentFlag, setCurrentFlag] = useState(1);
  const [upcomingFlag, setUpcomingFlag] = useState(1);
  const [currentColor, setCurrentColor] = useState("#151515");
  const [prevColor, setPrevColor] = useState("#151515");
  const [bgChange, setBgChange] = useState(false);
  const [playClick] = useSound(clickSound);

  useEffect(() => {
    setTimeout(() => {
      setCurrentFlag(upcomingFlag);
    }, 250);
  }, [upcomingFlag]);

  useEffect(() => {
   if (choices[currentFlag].color && choices[currentFlag].color !== currentColor){
    setPrevColor(currentColor);
    setCurrentColor(choices[currentFlag].color);
    setBgChange(true);
    setTimeout(() => {
      setBgChange(false);
   }, 2000);
  }}, [currentFlag, currentColor]);

  const handleMainClick = () => {
    isPlaying && playClick(); // Not working as intended? Doesn't acknowledge isPlaying state?
    setUpcomingFlag(choices[currentFlag].dest);
  };

  const handleLeftClick = () => {
    isPlaying && playClick(); // Not working as intended? Doesn't acknowledge isPlaying state?
    setUpcomingFlag(choices[currentFlag].left.dest);
  };

  const handleRightClick = () => {
    isPlaying && playClick(); // Not working as intended? Doesn't acknowledge isPlaying state?
    setUpcomingFlag(choices[currentFlag].right.dest);
  };

  return (
    <GameContainer prevColor={prevColor} currentColor={currentColor} bgChange={bgChange}>
      <GameText>
        {choices[currentFlag].type === "story" && (
          <MainText clickable onClick={handleMainClick}>
            <Typewriter
              options={{
                strings: choices[currentFlag].text,
                autoStart: true,
                loop: false,
                delay: 50,
                cursor: "",
              }}
            />
            <ClickIcon src={handIcon} yellow />
          </MainText>
        )}
        {choices[currentFlag].type === "choice" && (
          <>
            <MainText>
              <Typewriter
                options={{
                  strings: choices[currentFlag].text,
                  autoStart: true,
                  loop: false,
                  delay: 50,
                  cursor: "",
                }}
              />
            </MainText>
            <Choices>
              <LeftChoice onClick={handleLeftClick}>
                <Typewriter
                  options={{
                    strings: choices[currentFlag].left.text,
                    autoStart: true,
                    loop: false,
                    delay: 50,
                    cursor: "",
                  }}
                />
                <ClickIcon src={handIcon} blue />
              </LeftChoice>
              <RightChoice onClick={handleRightClick}>
                <Typewriter
                  options={{
                    strings: choices[currentFlag].right.text,
                    autoStart: true,
                    loop: false,
                    delay: 50,
                    cursor: "",
                  }}
                />
                <ClickIcon src={handIcon} red />
              </RightChoice>
            </Choices>
          </>
        )}
      </GameText>
    </GameContainer>
  );
};

export default Gamebox;
