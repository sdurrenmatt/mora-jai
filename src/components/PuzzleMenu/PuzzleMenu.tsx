import PuzzleMenuItem from "../PuzzleMenuItem/PuzzleMenuItem"
import "./PuzzleMenu.css"

type PuzzleMenuProps = {
    onClick?: () => void
}

export default function PuzzleMenu({ onClick }: PuzzleMenuProps) {
    return (
        <nav className="puzzle-menu">
            <ul className="puzzle-menu__items">
                <PuzzleMenuItem path="/play" text="Play" onClick={onClick} />
                <PuzzleMenuItem path="/gallery" text="Gallery" onClick={onClick} />
                <PuzzleMenuItem path="/rules" text="Rules" onClick={onClick} />
                <PuzzleMenuItem path="/credits" text="Credits" onClick={onClick} />
            </ul>
        </nav>
    )
}
