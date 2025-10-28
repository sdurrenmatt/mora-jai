import PuzzleBox from "../../components/PuzzleBox/PuzzleBox"
import PuzzleLevelInfo from "../../components/PuzzleLevelInfo/PuzzleLevelInfo"
import PuzzleLevelMap from "../../components/PuzzleLevelMap/PuzzleLevelMap"
import "./PuzzlePage.css"

export default function PuzzlePage() {
    return (
        <div className="puzzle-page">
            <div className="puzzle-page__puzzle-box"><PuzzleBox /></div>
            <div className="puzzle-page__puzzle-level-map"><PuzzleLevelMap /></div>
            <div className="puzzle-page__puzzle-level-info"><PuzzleLevelInfo /></div>
        </div>
    )
}
