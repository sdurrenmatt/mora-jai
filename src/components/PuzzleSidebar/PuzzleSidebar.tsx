import PuzzleLogo from "../PuzzleLogo/PuzzleLogo"
import PuzzleMenu from "../PuzzleMenu/PuzzleMenu"
import "./PuzzleSidebar.css"

type PuzzleSidebarProps = {
    onClick?: () => void
}

export default function PuzzleSidebar({ onClick }: PuzzleSidebarProps) {
    return (
        <div className="puzzle-sidebar">
            <PuzzleLogo />
            <PuzzleMenu onClick={onClick} />
        </div>
    )
}