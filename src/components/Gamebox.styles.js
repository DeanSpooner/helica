import styled, { css } from "styled-components";

const yellowCol = '#E4B404';
const blueCol = '#006497';
const bluePulse = '#00A7FC';
const redCol = '#B43519';
const redPulse = '#FB370C';

const GameText = styled.div`
display: flex;
color: white;
flex-direction: column;
height: 100%;
`

const MainText = styled.p`
margin: 0;
display: inline-flex;
font-size: 36px;
justify-content: center;
padding: 24px 0;
width: 99%;
${props => props.clickable && css`
    border: 5px solid yellow;
    cursor: pointer;
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

export { GameText, MainText, ClickIcon, Choices, LeftChoice, RightChoice };