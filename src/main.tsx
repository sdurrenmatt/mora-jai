import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { HashRouter } from "react-router"
import App from "./App.tsx"
import { GameContext, getGameContextValue } from "./context/GameContext.ts"
import "./styles/fonts.css"
import "./styles/index.css"
import "./styles/textures.css"

function Root() {
  const gameContextValue = getGameContextValue()
  return (
    <GameContext value={gameContextValue}>
      <HashRouter>
        <App />
      </HashRouter>
    </GameContext>
  )
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root />
  </StrictMode>
)
