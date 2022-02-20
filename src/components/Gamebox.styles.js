import styled, { css } from "styled-components";

const yellowCol = '#E4B404';
const blueCol = '#006497';
const bluePulse = '#00A7FC';
const redCol = '#B43519';
const redPulse = '#FB370C';

const GameContainer = styled.div`

${props => props.bgChange === true && css`
@keyframes bgChange {
        0% {
            background: ${props.prevColor};
        }
        100% {
            background: ${props.currentColor};
        }
    }
    animation: bgChange forwards 2s;
`}
${props => `background: ${props.currentColor};`}
height: 100%;
`

const GameText = styled.div`
display: flex;
color: white;
flex-direction: column;
`

const MainText = styled.p`
background-color: #000;
margin: 0;
display: inline-flex;
font-size: 36px;
justify-content: center;
padding: 24px 0;
width: 100%;
${props => props.clickable && css`
border: 5px solid yellow;
cursor: pointer;
width: calc(100% - 10px);
`}
`

const ClickIcon = styled.img`
@keyframes pulsing {
    0% {
        background-color: transparent;
    }
    25% {
        background-color: ${yellowCol};
    }
    75% {
        background-color: ${yellowCol};
    }
    100% {
        background-color: transparent;
    }
}
@keyframes pulsingBlue {
    0% {
        background-color: transparent;
    }
    25% {
        background-color: ${bluePulse};
    }
    75% {
        background-color: ${bluePulse};
    }
    100% {
        background-color: transparent;
    }
}
@keyframes pulsingRed {
    0% {
        background-color: transparent;
    }
    25% {
        background-color: ${redPulse};
    }
    75% {
        background-color: ${redPulse};
    }
    100% {
        background-color: transparent;
    }
}
animation: pulsing infinite 2s;
border: 0 solid;
border-radius: 50%;
height: 32px;
margin: 4px 24px 0;
padding: 4px;
${props => props.red && `transform: rotate(90deg); animation: pulsingRed infinite 2s`}
${props => props.blue && `transform: rotate(90deg) scaleY(-1); animation: pulsingBlue infinite 2s`}
`

const Choices = styled.div`
display: flex;
flex-direction: row;
`

const LeftChoice = styled.p`
background-color: #19507b;
border: 5px solid ${blueCol};
cursor: pointer;
font-size: 24px;
margin: 0;
padding: 1rem;
width: 50%;
`
const RightChoice = styled.p`
background-color: #8D220B;
border: 5px solid ${redCol};
cursor: pointer;
font-size: 24px;
margin: 0;
padding: 1rem;
width: 50%;
`

const InventoryBox = styled.div`
display: flex;
color: white;
flex-direction: column;
margin: 0 auto;
`

const InventoryText = styled.p`
background-color: #000;
margin: 0;
display: inline-flex;
font-size: 16px;
width: 100%;
border: 5px solid green;
width: calc(50% - 10px);
text-align: left;
padding: 24px 0;
::before {
    content: "";
    margin-right: 24px;
}
`

export { GameContainer, GameText, MainText, ClickIcon, Choices, LeftChoice, RightChoice, InventoryBox, InventoryText };