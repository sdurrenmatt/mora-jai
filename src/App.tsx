import "./App.css"
import PuzzleBackground from "./components/PuzzleBackground/PuzzleBackground"
import PuzzleBox from "./components/PuzzleBox/PuzzleBox"
import PuzzleLevelInfo from "./components/PuzzleLevelInfo/PuzzleLevelInfo"
import PuzzleLevelMap from "./components/PuzzleLevelMap/PuzzleLevelMap"
import PuzzleMenu from "./components/PuzzleMenu/PuzzleMenu"
import PuzzleTitle from "./components/PuzzleTitle/PuzzleTitle"
import { AppContext, useGameState } from "./context/AppContext"


export default function App() {
    const contextValue = useGameState()

    return (
        <PuzzleBackground>
            <AppContext value={contextValue}>
                <div className="app">
                    <div className="app__sidebar">
                        <PuzzleTitle />
                        <PuzzleMenu />
                    </div>
                    <div className="app__main">
                        <div className="app__puzzle-box"><PuzzleBox /></div>
                        <div className="app__puzzle-level-map"><PuzzleLevelMap /></div>
                        <div className="app__puzzle-level-info"><PuzzleLevelInfo /></div>
                    </div>
                </div>
            </AppContext>
        </PuzzleBackground>
    )
}
