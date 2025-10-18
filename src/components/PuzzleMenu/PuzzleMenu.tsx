import "./PuzzleMenu.css"

export default function PuzzleMenu() {
    return (
        <nav className="puzzle-menu">
            <ul className="puzzle-menu__list">
                <li className="puzzle-menu__item">Play</li>
                <li className="puzzle-menu__item">Rules</li>
                <li className="puzzle-menu__item">Gallery</li>
                <li className="puzzle-menu__item">Credits</li>
            </ul>
        </nav>
    )
}
