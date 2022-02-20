import styled, { css } from "styled-components";

const yellowCol = '#E4B404'
const blueCol = '#006497';
const redCol = '#B43519';

const GameText = styled.div`
display: flex;
color: white;
flex-direction: column;
`

const MainText = styled.p`
display: inline-flex;
font-size: 36px;
justify-content: center;
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
animation: pulsing infinite 2s;
border: 0 solid;
border-radius: 50%;
height: 32px;
margin: 8px 24px 0;
padding: 4px;
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
padding: 1rem;
width: 47%;
`
const RightChoice = styled.p`
background-color: #8D220B;
border: 5px solid ${redCol};
cursor: pointer;
font-size: 24px;
padding: 1rem;
width: 47%;
`

export { GameText, MainText, ClickIcon, Choices, LeftChoice, RightChoice };