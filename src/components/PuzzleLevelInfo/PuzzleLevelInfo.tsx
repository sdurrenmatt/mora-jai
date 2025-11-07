import { useContext } from "react"
import { GameContext } from "../../context/GameContext"
import AnimatedText from "../common/AnimatedText/AnimatedText"
import "./PuzzleLevelInfo.css"

export default function PuzzleLevelInfo() {
    const { currentWorld, currentLevel } = useContext(GameContext)

    return (
        <div className="puzzle-level-info-container">
            <div className="puzzle-level-info">
                <div className="puzzle-level-info__world">
                    <AnimatedText text={currentWorld} />
                </div>

                <div className="puzzle-level-info__level">
                    <AnimatedText text={`Level ${currentLevel.name}`} />
                </div>
            </div>
        </div>
    )
}
