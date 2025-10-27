import { worlds } from "../../data/worlds"
import PuzzleScroll from "../PuzzleScroll/PuzzleScroll"
import "./PuzzleLevelMap.css"

export default function PuzzleLevelMap() {
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
