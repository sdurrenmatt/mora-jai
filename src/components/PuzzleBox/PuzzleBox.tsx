import clsx from "clsx"
import { usePuzzleState } from "../../hooks/usePuzzleState"
import type { Level } from "../../types/level"
import PuzzleCorners from "../PuzzleCorners/PuzzleCorners"
import PuzzleGrid from "../PuzzleGrid/PuzzleGrid"
import PuzzleReward from "../PuzzleReward/PuzzleReward"
import "./PuzzleBox.css"

type PuzzleBoxProps = {
    level: Level
}

export default function PuzzleBox({ level }: PuzzleBoxProps) {
    const { puzzle, onCornerClick, onTileClick } = usePuzzleState(level.puzzle)

    return (
        <div className="puzzle-box-wrapper">
            <div className={clsx("puzzle-box", puzzle.solved && "puzzle-box--solved", "wood-texture wood-filter--dark")}>
                <PuzzleCorners corners={puzzle.corners} onCornerClick={onCornerClick} />
                <div className="puzzle-box__base wood-texture wood-filter--light">
                    <div className="puzzle-box__puzzle-reward">
                        <PuzzleReward reward={level.reward} />
                    </div>
                    <div className="puzzle-box__puzzle-grid wood-texture wood-filter--dim">
                        <PuzzleGrid tiles={puzzle.tiles} onTileClick={onTileClick} />
                    </div>
                </div>
            </div>
        </div>
    )
}
