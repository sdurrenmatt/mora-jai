import clsx from "clsx"
import { useCallback, useContext } from "react"
import { GameContext } from "../../context/GameContext"
import type { Level, World } from "../../types/level"
import "./PuzzleScroll.css"

type PuzzleScrollProps = {
    world: World
}

export default function PuzzleScroll({ world }: PuzzleScrollProps) {
    const { currentLevel, solvedPuzzles, setCurrentWorld, setCurrentLevel } = useContext(GameContext)

    const handleLevelClick = useCallback((level: Level) => {
        setCurrentWorld(world.name)
        setCurrentLevel(level)
    }, [world])

    return (
        <div className={`puzzle-scroll puzzle-scroll--${world.id}`}>
            <div className="puzzle-scroll__cord puzzle-scroll__cord--left" />
            <div className="puzzle-scroll__cord puzzle-scroll__cord--right" />
            <div className="puzzle-scroll__content-wrapper">
                <div className="puzzle-scroll__content">
                    <span className="puzzle-scroll__title">{world.name}</span>
                    <ul className="puzzle-scroll__levels">
                        {world.levels.map((level) => (
                            <li
                                key={level.id}
                                className={clsx("puzzle-scroll__level", {
                                    "puzzle-scroll__level--selected": level.id === currentLevel.id,
                                    "puzzle-scroll__level--solved": solvedPuzzles.has(level.id),
                                })}
                                onClick={() => handleLevelClick(level)}
                            >
                                {level.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
