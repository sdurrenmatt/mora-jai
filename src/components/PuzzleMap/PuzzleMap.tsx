import type { World } from "../../types/level"
import PuzzleScroll from "../PuzzleScroll/PuzzleScroll"
import "./PuzzleMap.css"

type PuzzleMapProps = {
    worlds: World[]
}

export default function PuzzleMap({ worlds }: PuzzleMapProps) {
    return (
        <div className="puzzle-map">
            <div className="puzzle-map__scrolls">
                {
                    worlds.map((world) => (
                        <PuzzleScroll key={world.id} world={world} />
                    ))
                }
            </div>
        </div>
    )
}
