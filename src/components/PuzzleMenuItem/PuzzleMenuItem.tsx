import { NavLink } from "react-router"
import "./PuzzleMenuItem.css"

type PuzzleMenuItemProps = {
    path: string
    text: string
    onClick?: () => void
}

export default function PuzzleMenuItem({ path, text, onClick }: PuzzleMenuItemProps) {
    return (
        <div className="puzzle-menu-item-container">
            <li className="puzzle-menu-item">
                <NavLink
                    className="puzzle-menu-item__link"
                    to={path}
                    onClick={onClick}
                >
                    {text}
                </NavLink>
            </li>
        </div>
    )
}
