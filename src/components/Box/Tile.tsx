import type { ButtonHTMLAttributes } from "react"
import type { Color } from "../../lib/puzzle/types"
import { ColorHexCodes } from "../../styles/colors"
import "./Tile.css"

type TileProps = {
  color: Color
  onClick?: () => void
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function Tile({ color, onClick, ...rest }: TileProps) {
  return (
    <button
      type="button"
      className="tile wood-texture wood-texture--light"
      aria-label={`${color} tile`}
      style={{ backgroundColor: ColorHexCodes[color] }}
      onClick={onClick}
      {...rest}
    />
  )
}
