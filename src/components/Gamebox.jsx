import React, { useState, useEffect } from "react";
import {
  Choices,
  GameText,
  ClickIcon,
  LeftChoice,
  MainText,
  RightChoice,
} from "./Gamebox.styles";
import Typewriter from "typewriter-effect";
import choices from "../assets/json/choices.json";
import handIcon from "../assets/icons/hand.png";

const Gamebox = () => {
  const [currentFlag, setCurrentFlag] = useState(1);
  const [upcomingFlag, setUpcomingFlag] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setCurrentFlag(upcomingFlag);
    }, 250);
  }, [upcomingFlag]);

  return (
    <GameText>
      {choices[currentFlag].type === "story" && (
        <MainText
          clickable
          onClick={() => setUpcomingFlag(choices[currentFlag].dest)}
        >
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
            <LeftChoice
              onClick={() => setUpcomingFlag(choices[currentFlag].left.dest)}
            >
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
            <RightChoice
              onClick={() => setUpcomingFlag(choices[currentFlag].right.dest)}
            >
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
  );
};

export default Gamebox;
