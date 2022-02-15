import styled, { css } from "styled-components";

const MainContainer = styled.div`
    height: 100vh;
    width: 100vw;
    background: ${props => props.darkTheme ? "linear-gradient(0deg, rgba(37,37,37,1) 0%, rgba(0,0,0,1) 50%, rgba(37,37,37,1) 100%);" : "linear-gradient(0deg, rgba(180, 180, 180, 1) 0%, rgba(117, 117, 117, 1) 50%, rgba(180, 180, 180, 1) 100%);"};
`;
const Title = styled.h1`
    color: black;
    margin-top: 0;

    ${props => props.darkTheme && css`
        color: white;
    `}
`;

const ThemeToggle = styled.button`
background-color: black;
border: 0;
border-radius: 12px;
color: white;
font-size: 2em;
width: 3em;
${props => props.darkTheme && css`
background-color: white;
        color: black;
    `}

`

export { Title, ThemeToggle, MainContainer };