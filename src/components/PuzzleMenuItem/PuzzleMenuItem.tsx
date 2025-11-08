import { NavLink } from "react-router"
import "./PuzzleMenuItem.css"

type PuzzleMenuItemProps = {
    path: string
    text: string
}

export default function PuzzleMenuItem({ path, text }: PuzzleMenuItemProps) {
    return (
        <div className="puzzle-menu-item-container">
            <li className="puzzle-menu-item">
                <NavLink to={path} className="puzzle-menu-item__link">
                    {text}
                </NavLink>
            </li>
        </div>
    )
}
