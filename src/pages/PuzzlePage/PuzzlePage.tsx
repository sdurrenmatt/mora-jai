
import { useContext, useRef } from "react"
import { CSSTransition } from "react-transition-group"
import PuzzleBox from "../../components/PuzzleBox/PuzzleBox"
import PuzzleLevelInfo from "../../components/PuzzleLevelInfo/PuzzleLevelInfo"
import PuzzleLevelMap from "../../components/PuzzleLevelMap/PuzzleLevelMap"
import { GameContext } from "../../context/GameContext"
import "./PuzzlePage.css"

export default function PuzzlePage() {
    const { currentLevel } = useContext(GameContext)
    const nodeRef = useRef<HTMLDivElement>(null)

    return (
        <div className="puzzle-page">
            <div className="puzzle-page__puzzle-box">
                <CSSTransition
                    key={currentLevel.id}
                    nodeRef={nodeRef}
                    in={true}
                    appear
                    timeout={3000}
                    classNames="puzzle-page__puzzle-box--lift"
                >
                    <div ref={nodeRef}>
                        <PuzzleBox />
                    </div>
                </CSSTransition>
            </div>

            <div className="puzzle-page__puzzle-level-map">
                <PuzzleLevelMap />
            </div>

            <div className="puzzle-page__puzzle-level-info">
                <PuzzleLevelInfo />
            </div>
        </div>
    )
}
