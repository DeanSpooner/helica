import styled, { css } from "styled-components";

const darkBackground = '#151515';
const lightBackground = '#bababa';
const textColour = '#dadada';

const MainContainer = styled.div`
    @keyframes backgroundChange {
        0% {
            background: ${lightBackground};
        }
        50% {
            background: ${lightBackground};
        }
        100% {
            background: ${darkBackground};
        }
    }
    height: 84vh;
    width: 90vw;
    margin: 0 auto 1em;
    ${props => props.started ? `animation: backgroundChange forwards 2s; background: ${darkBackground};` : `background: ${lightBackground};`};
`;
const Title = styled.h1`
    color: ${textColour};
    margin-top: 0;

    ${props => props.darkTheme && css`
        color: white;
    `}
`;

const StartButtonContainer = styled.div`
@keyframes fadeOut {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        display: none;
    }
}
${props => props.started ? `animation: fadeOut 1s forwards;` : `display: block;`};
`;

const StartButton = styled.button`
@keyframes fadeOut {
   0% {opacity: 1;}
   100% {opacity: 0; display: none;} 
} 
background-color: black;
border: 0;
border-radius: 12px;
color: ${textColour};
font-family: "Roboto Slab", serif;
font-size: 1.5em;
margin-top: 45vh;
width: 3em;
.hidden {
animation: fadeOut forwards 1s;
}
`

const MusicToggle = styled.button`
background-color: green;
border: 0;
border-radius: 12px;
padding: 6px 0 0;
color: black;
font-family: "Roboto Slab", serif;
font-size: 1.5em;
align-items: center;
justify-content: center;
height: 48px;
width: 48px;
${props => props.isPlaying && css`
background-color: red;
    `}
`

export { Title, StartButtonContainer, StartButton, MainContainer, MusicToggle };