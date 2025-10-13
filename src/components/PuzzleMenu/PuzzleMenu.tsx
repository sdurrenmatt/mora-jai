import "./PuzzleMenu.css"

const MENU_ITEMS = ["Play", "Rules", "Gallery", "Credits"]

export default function PuzzleMenu() {
    return (
        <nav className="puzzle-menu" aria-label="Puzzle navigation">
            <ul className="puzzle-menu__list">
                {
                    MENU_ITEMS.map((item) => (
                        <li key={item} className="puzzle-menu__item">{item}</li>
                    ))
                }
            </ul>
        </nav>
    )
}
