import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App.tsx'
import { GameContext, useGameState } from './context/GameContext.ts'
import './styles/fonts.css'
import './styles/index.css'
import './styles/textures.css'

function Root() {
    const gameState = useGameState()
    return (
        <GameContext value={gameState}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </GameContext>
    )
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Root />
    </StrictMode>
)
