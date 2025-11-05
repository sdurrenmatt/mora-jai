
import PuzzleBox from "../PuzzleBox/PuzzleBox"
import PuzzleLevelInfo from "../PuzzleLevelInfo/PuzzleLevelInfo"
import PuzzleLevelMap from "../PuzzleLevelMap/PuzzleLevelMap"
import "./PuzzleGame.css"

export default function PuzzleGame() {
    return (
        <div className="puzzle-game">
            <div className="puzzle-game__puzzle-level-map">
                <PuzzleLevelMap />
            </div>

            <div className="puzzle-game__puzzle-box">
                <PuzzleBox />
            </div>

            <div className="puzzle-game__puzzle-level-info">
                <PuzzleLevelInfo />
            </div>
        </div>
    )
}
