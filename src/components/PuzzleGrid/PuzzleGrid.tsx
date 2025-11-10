
import type { Tile } from "../../lib/puzzle/types"
import PuzzleTile from "../PuzzleTile/PuzzleTile"
import "./PuzzleGrid.css"

type PuzzleGridProps = {
    tiles: Tile[][]
    onTileClick?: (i: number, j: number) => void
}

export default function PuzzleGrid({ tiles, onTileClick }: PuzzleGridProps) {
    return (
        <div className="puzzle-grid">
            {tiles.flatMap((row, i) =>
                row.map((tile, j) => (
                    <PuzzleTile
                        key={`${i}-${j}`}
                        color={tile.color}
                        onClick={() => onTileClick?.(i, j)}
                    />
                ))
            )}
        </div>
    )
}
