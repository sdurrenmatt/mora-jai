import "./PuzzleLevel.css"

type PuzzleLevelProps = {
    worldName: string
    levelName: string
}

export default function PuzzleLevel({ worldName, levelName }: PuzzleLevelProps) {
    return (
        <div className="puzzle-level">
            <span className="puzzle-level__name">{worldName} {levelName}</span>
        </div>
    )
}