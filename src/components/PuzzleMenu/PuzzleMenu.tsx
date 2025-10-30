import { NavLink } from "react-router"
import "./PuzzleMenu.css"

export default function PuzzleMenu() {
    return (
        <nav className="puzzle-menu">
            <ul className="puzzle-menu__list">
                <li className="puzzle-menu__item">
                    <NavLink to="/play" className="puzzle-menu__link">Play</NavLink>
                </li>
                <li className="puzzle-menu__item">
                    <NavLink to="/gallery" className="puzzle-menu__link">Gallery</NavLink>
                </li>
                <li className="puzzle-menu__item">
                    <NavLink to="/rules" className="puzzle-menu__link">Rules</NavLink>
                </li>
                <li className="puzzle-menu__item">
                    <NavLink to="/credits" className="puzzle-menu__link">Credits</NavLink>
                </li>
            </ul>
        </nav>
    )
}
