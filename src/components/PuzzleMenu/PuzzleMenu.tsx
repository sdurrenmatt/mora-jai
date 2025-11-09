import PuzzleMenuItem from "../PuzzleMenuItem/PuzzleMenuItem"
import "./PuzzleMenu.css"

export default function PuzzleMenu() {
    return (
        <nav className="puzzle-menu">
            <ul className="puzzle-menu__items">
                <PuzzleMenuItem path="/play" text="Play" />
                <PuzzleMenuItem path="/gallery" text="Gallery" />
                <PuzzleMenuItem path="/rules" text="Rules" />
                <PuzzleMenuItem path="/credits" text="Credits" />
            </ul>
        </nav>
    )
}
