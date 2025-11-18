import { NavLink } from "react-router"
import "./MenuItem.css"

type MenuItemProps = {
  path: string
  text: string
  onClick?: () => void
}

export default function PuzzleMenuItem({ path, text, onClick }: MenuItemProps) {
  return (
    <div className="menu-item-container">
      <li className="menu-item">
        <NavLink
          className="menu-item__link"
          to={path}
          onClick={onClick}
        >
          {text}
        </NavLink>
      </li>
    </div>
  )
}
