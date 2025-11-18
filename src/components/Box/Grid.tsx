
import type { Tile as TileType } from "../../lib/puzzle/types"
import "./Grid.css"
import Tile from "./Tile"

type GridProps = {
  tiles: TileType[][]
  onTileClick?: (i: number, j: number) => void
}

export default function Grid({ tiles, onTileClick }: GridProps) {
  return (
    <div className="grid" role="grid" aria-label="Puzzle board">
      {tiles.flatMap((row, i) =>
        row.map((tile, j) => (
          <Tile
            key={`${i}-${j}`}
            color={tile.color}
            onClick={() => onTileClick?.(i, j)}
            role="gridcell"
            aria-rowindex={i + 1}
            aria-colindex={j + 1}
          />
        ))
      )}
    </div>
  )
}
