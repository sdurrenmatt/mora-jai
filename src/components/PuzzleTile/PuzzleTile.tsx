import type { Color } from "../../lib/puzzle/types"
import { ColorHexCodes } from "../../styles/colors"
import "./PuzzleTile.css"

type PuzzleTileProps = {
    color: Color
    onClick?: () => void
}

export default function Tile({ color, onClick }: PuzzleTileProps) {
    return (
        <div className="puzzle-tile wood-texture wood-texture--light"
            style={{ backgroundColor: ColorHexCodes[color] }}
            onClick={onClick}
        />
    )
}
