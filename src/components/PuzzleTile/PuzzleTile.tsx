import type { ButtonHTMLAttributes } from "react"
import type { Color } from "../../lib/puzzle/types"
import { ColorHexCodes } from "../../styles/colors"
import "./PuzzleTile.css"

type PuzzleTileProps = {
    color: Color
    onClick?: () => void
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function Tile({ color, onClick, ...rest }: PuzzleTileProps) {
    return (
        <button
            type="button"
            className="puzzle-tile wood-texture wood-texture--light"
            aria-label={`${color} tile`}
            style={{ backgroundColor: ColorHexCodes[color] }}
            onClick={onClick}
            {...rest}
        />
    )
}
