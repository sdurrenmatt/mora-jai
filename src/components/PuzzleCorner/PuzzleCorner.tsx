import clsx from "clsx"
import type { Color, CornerPosition } from "../../lib/puzzle/types"
import { ColorHexCodes } from "../../styles/colors"
import "./PuzzleCorner.css"

type PuzzleCornerProps = {
    position: CornerPosition
    color: Color
    matched?: boolean
    onClick?: () => void
}

export default function PuzzleCorner({ position, color, matched, onClick }: PuzzleCornerProps) {
    return (
        <button
            className={clsx(
                "puzzle-corner",
                `puzzle-corner--${position}`,
                "wood-texture",
                "wood-texture--light",
                { "puzzle-corner--lit": matched }
            )}
            aria-label={`${color} corner at ${position}, ${matched ? "matched" : "not matched"}`}
            style={{ backgroundColor: ColorHexCodes[color] }}
            onClick={onClick}
        />
    )
}
