import React, { useState, useEffect } from "react";
import {
  GameContainer,
  Choices,
  GameText,
  ClickIcon,
  LeftChoice,
  MainText,
  RightChoice,
  InventoryBox,
  InventoryText,
  Item,
  HealthDisplay,
  HealthMeter,
} from "./Gamebox.styles";
import Typewriter from "typewriter-effect";
import useSound from "use-sound";
import clickSound from "../assets/audio/click.mp3";
import handIcon from "../assets/icons/hand.png";

const Gamebox = ({
  isPlaying,
  choices,
  currentFlag,
  setCurrentFlag,
  upcomingFlag,
  setUpcomingFlag,
}) => {
  const [currentColor, setCurrentColor] = useState("#151515");
  const [prevColor, setPrevColor] = useState("#151515");
  const [bgChange, setBgChange] = useState(false);
  const [playClick] = useSound(clickSound);
  const [inventory, setInventory] = useState([]);
  const [maxHealth, setMaxHealth] = useState(10);
  const [currentHealth, setCurrentHealth] = useState(10);

  useEffect(() => {
    setTimeout(() => {
      setCurrentFlag(upcomingFlag);
    }, 250);
  }, [upcomingFlag]);

  useEffect(() => {
    if (
      choices[currentFlag].color &&
      choices[currentFlag].color !== currentColor
    ) {
      setPrevColor(currentColor);
      setCurrentColor(choices[currentFlag].color);
      setBgChange(true);
      setTimeout(() => {
        setBgChange(false);
      }, 2000);
    }
  }, [currentFlag, currentColor]);

  useEffect(() => {
    if (choices[currentFlag].damage) {
      if (currentHealth - choices[currentFlag].damage <= 0) {
        setCurrentHealth(currentHealth - choices[currentFlag].damage);
      } else if (currentHealth - choices[currentFlag].damage < 0) {
        setCurrentHealth(0);
      }
    }
    if (currentHealth === 0) {
      setCurrentFlag("gameover");
      setCurrentHealth(maxHealth);
    }
  }, [currentFlag]);

  useEffect(() => {
    if (choices[currentFlag].heal && choices[currentFlag].heal === "full") {
      setCurrentHealth(maxHealth);
    } else if (choices[currentFlag].heal) {
      if (currentHealth + choices[currentFlag].heal <= maxHealth) {
        setCurrentHealth(currentHealth + choices[currentFlag].heal);
      } else {
        setCurrentHealth(maxHealth);
      }
    }
  }, [currentFlag]);

  const handleMainClick = () => {
    isPlaying && playClick(); // Not working as intended? Doesn't acknowledge isPlaying state?
    setUpcomingFlag(choices[currentFlag].dest);
  };

  const handleItemClick = () => {
    isPlaying && playClick(); // Not working as intended? Doesn't acknowledge isPlaying state?
    inventory.push(choices[currentFlag].item);
    setUpcomingFlag(choices[currentFlag].dest);
  };

  const handleItemUseClick = () => {
    isPlaying && playClick(); // Not working as intended? Doesn't acknowledge isPlaying state?
    const filteredItems = inventory.filter(
      (item) => item !== choices[currentFlag].item
    );
    setInventory(filteredItems);
    setUpcomingFlag(choices[currentFlag].dest);
  };

  const handleRestartClick = () => {
    isPlaying && playClick(); // Not working as intended? Doesn't acknowledge isPlaying state?
    setInventory([]);
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
    <GameContainer
      prevColor={prevColor}
      currentColor={currentColor}
      bgChange={bgChange}
    >
      <GameText>
        {choices[currentFlag].type === "story" && (
          <MainText clickable onClick={handleMainClick}>
            <Typewriter
              options={{
                strings: choices[currentFlag].text,
                autoStart: true,
                loop: false,
                delay: 20,
                cursor: "",
              }}
            />
            <ClickIcon src={handIcon} yellow />
          </MainText>
        )}
        {choices[currentFlag].type === "item" && (
          <MainText clickable onClick={handleItemClick}>
            <Typewriter
              options={{
                strings: choices[currentFlag].text,
                autoStart: true,
                loop: false,
                delay: 20,
                cursor: "",
              }}
            />
            <ClickIcon src={handIcon} yellow />
          </MainText>
        )}
        {choices[currentFlag].type === "used" && (
          <MainText clickable onClick={handleItemUseClick}>
            <Typewriter
              options={{
                strings: choices[currentFlag].text,
                autoStart: true,
                loop: false,
                delay: 20,
                cursor: "",
              }}
            />
            <ClickIcon src={handIcon} yellow />
          </MainText>
        )}
        {choices[currentFlag].type === "restart" && (
          <MainText clickable onClick={handleRestartClick}>
            <Typewriter
              options={{
                strings: choices[currentFlag].text,
                autoStart: true,
                loop: false,
                delay: 20,
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
                  delay: 20,
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
                    delay: 20,
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
                    delay: 20,
                    cursor: "",
                  }}
                />
                <ClickIcon src={handIcon} red />
              </RightChoice>
            </Choices>
          </>
        )}
      </GameText>
      {inventory.length > 0 && (
        <InventoryBox>
          <InventoryText>
            Inventory:{" "}
            {inventory.map((item) => (
              <Item className="item">{item}</Item>
            ))}
          </InventoryText>
        </InventoryBox>
      )}
      <HealthDisplay>
        <HealthMeter
          min={0}
          max={maxHealth}
          value={currentHealth}
          low={(maxHealth / 10) * 2.51}
          high={(maxHealth / 10) * 5.01}
          optimum={maxHealth}
        />{" "}
        {currentHealth}/{maxHealth} HP
      </HealthDisplay>
    </GameContainer>
  );
};

export default Gamebox;
