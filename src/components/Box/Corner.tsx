import clsx from "clsx"
import type { Color, CornerPosition } from "../../lib/puzzle/types"
import { ColorHexCodes } from "../../styles/colors"
import "./Corner.css"

type CornerProps = {
  position: CornerPosition
  color: Color
  matched?: boolean
  onClick?: () => void
}

export default function Corner({ position, color, matched, onClick }: CornerProps) {
  return (
    <button
      type="button"
      className={clsx(
        "corner",
        `corner--${position}`,
        "wood-texture",
        "wood-texture--light",
        { "corner--lit": matched }
      )}
      aria-label={`${color} corner at ${position}, ${matched ? "matched" : "not matched"}`}
      style={{ backgroundColor: ColorHexCodes[color] }}
      onClick={onClick}
    />
  )
}
