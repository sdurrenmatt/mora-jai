import { worlds } from "../../data/worlds"
import PuzzleScroll from "../PuzzleScroll/PuzzleScroll"
import "./PuzzleLevelMap.css"

export default function PuzzleLevelMap() {
    return (
        <div className="puzzle-level-map-container">
            <div
                className="puzzle-level-map"
                role="region"
                aria-label="Level map"
            >
                {worlds.map((world) => (
                    <PuzzleScroll key={world.id} world={world} />
                ))}
            </div>
        </div>
    )
}
