import React, { useState } from 'react'
import { Title, ThemeToggle, MainContainer } from './Main.styles'

const Main = () => {

    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className='main'>
            <MainContainer darkTheme={darkMode}>
                <Title darkTheme={darkMode}>Helica</Title>
                <ThemeToggle darkTheme={darkMode} onClick={() => setDarkMode(!darkMode)}>{darkMode ? "Light" : "Dark"}</ThemeToggle>
            </MainContainer>
        </div>
    )
}

export default Main