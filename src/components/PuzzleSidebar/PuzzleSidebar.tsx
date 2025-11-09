import PuzzleLogo from "../PuzzleLogo/PuzzleLogo"
import PuzzleMenu from "../PuzzleMenu/PuzzleMenu"
import "./PuzzleSidebar.css"

export default function PuzzleSidebar() {
    return (
        <div className="puzzle-sidebar">
            <PuzzleLogo />
            <PuzzleMenu />
        </div>
    )
}