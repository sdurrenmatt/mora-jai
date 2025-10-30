
import { useContext, useRef } from "react"
import { CSSTransition } from "react-transition-group"
import { GameContext } from "../../context/GameContext"
import PuzzleBox from "../PuzzleBox/PuzzleBox"
import PuzzleLevelInfo from "../PuzzleLevelInfo/PuzzleLevelInfo"
import PuzzleLevelMap from "../PuzzleLevelMap/PuzzleLevelMap"
import "./PuzzleGame.css"

export default function PuzzleGame() {
    const { currentLevel } = useContext(GameContext)
    const nodeRef = useRef<HTMLDivElement>(null)

    return (
        <div className="puzzle-game">
            <div className="puzzle-game__puzzle-box">
                <CSSTransition
                    key={currentLevel.id}
                    nodeRef={nodeRef}
                    in
                    appear
                    timeout={3000}
                    classNames="puzzle-game__puzzle-box--lift"
                >
                    <div ref={nodeRef}>
                        <PuzzleBox />
                    </div>
                </CSSTransition>
            </div>

            <div className="puzzle-game__puzzle-level-map">
                <PuzzleLevelMap />
            </div>

            <div className="puzzle-game__puzzle-level-info">
                <PuzzleLevelInfo />
            </div>
        </div>
    )
}
