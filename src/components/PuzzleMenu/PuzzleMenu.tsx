import { NavLink } from "react-router"
import logo from "../../assets/images/logo.png"
import "./PuzzleMenu.css"

export default function PuzzleMenu() {
    return (
        <div className="puzzle-menu">
            <img
                className="puzzle-menu__logo"
                src={logo}
                alt="Mora Jai"
            />
            <nav>
                <ul className="puzzle-menu__items">
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
        </div>
    )
}
