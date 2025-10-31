import clsx from "clsx"
import { useContext, useState } from "react"
import { GameContext } from "../../context/GameContext"
import { usePuzzleState } from "../../hooks/usePuzzleState"
import PuzzleCorners from "../PuzzleCorners/PuzzleCorners"
import PuzzleGrid from "../PuzzleGrid/PuzzleGrid"
import PuzzleReward from "../PuzzleReward/PuzzleReward"
import "./PuzzleBox.css"

export default function PuzzleBox() {
    const { currentLevel } = useContext(GameContext)
    const { puzzle, onCornerClick, onTileClick } = usePuzzleState()
    const [rewardCollected, setRewardCollected] = useState(false)

    return (
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
                <div
                    className={clsx(
                        "puzzle-box__puzzle-reward",
                        { "puzzle-box__puzzle-reward--collected": rewardCollected }
                    )}
                    onClick={() => setRewardCollected(true)}
                >
                    <PuzzleReward reward={currentLevel.reward} />
                </div>
                <div className="puzzle-box__puzzle-grid wood-texture wood-filter--dim">
                    <PuzzleGrid tiles={puzzle.tiles} onTileClick={onTileClick} />
                </div>
            </div>
        </div>
    )
}
