import clsx from "clsx"
import { useContext } from "react"
import { AppContext } from "../../context/AppContext"
import { usePuzzleState } from "../../hooks/usePuzzleState"
import PuzzleCorners from "../PuzzleCorners/PuzzleCorners"
import PuzzleGrid from "../PuzzleGrid/PuzzleGrid"
import PuzzleReward from "../PuzzleReward/PuzzleReward"
import "./PuzzleBox.css"

export default function PuzzleBox() {
    const { currentLevel } = useContext(AppContext)
    const { puzzle, onCornerClick, onTileClick } = usePuzzleState()

    return (
        <div className="puzzle-box-wrapper">
            <div
                className={clsx(
                    "puzzle-box",
                    "wood-texture",
                    "wood-filter--dark",
                    { "puzzle-box--solved": puzzle.solved }
                )}
            >
                <PuzzleCorners corners={puzzle.corners} onCornerClick={onCornerClick} />
                <div className="puzzle-box__base wood-texture wood-filter--light">
                    <div className="puzzle-box__puzzle-reward">
                        <PuzzleReward reward={currentLevel.reward} />
                    </div>
                    <div className="puzzle-box__puzzle-grid wood-texture wood-filter--dim">
                        <PuzzleGrid tiles={puzzle.tiles} onTileClick={onTileClick} />
                    </div>
                </div>
            </div>
        </div>
    )
}
