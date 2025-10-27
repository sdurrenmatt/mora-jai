import type { World } from "../../types/level"
import PuzzleScroll from "../PuzzleScroll/PuzzleScroll"
import "./PuzzleLevelMap.css"

type PuzzleLevelMapProps = {
    worlds: World[]
}

export default function PuzzleLevelMap({ worlds }: PuzzleLevelMapProps) {
    return (
        <div className="puzzle-level-map">
            <div className="puzzle-level-map__scrolls">
                {worlds.map((world) => (
                    <PuzzleScroll key={world.id} world={world} />
                ))}
            </div>
        </div>
    )
}
