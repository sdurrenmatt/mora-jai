import clsx from "clsx"
import { useCallback, useContext } from "react"
import { GameContext } from "../../context/GameContext"
import type { Level, World } from "../../types/level"
import "./Scroll.css"

type ScrollProps = {
  world: World
}

export default function Scroll({ world }: ScrollProps) {
  const { currentLevel, solvedPuzzles, setCurrentWorld, setCurrentLevel } = useContext(GameContext)

  const handleLevelClick = useCallback((level: Level) => {
    setCurrentWorld(world.name)
    setCurrentLevel(level)
  }, [])

  return (
    <div className="scroll-container">
      <div
        className={`scroll scroll--${world.id}`}
        role="region"
        aria-label={`Levels in world ${world.name}`}
      >
        <div className="scroll__cord scroll__cord--left" />
        <div className="scroll__cord scroll__cord--right" />
        <div className="scroll__content-wrapper">
          <div className="scroll__content">
            <span className="scroll__title">{world.name}</span>
            <ul className="scroll__levels">
              {world.levels.map((level) => (
                <li key={level.id}>
                  <button
                    type="button"
                    className={clsx("scroll__level", {
                      "scroll__level--selected": level.id === currentLevel.id,
                      "scroll__level--solved": solvedPuzzles.has(level.id),
                    })}
                    onClick={() => handleLevelClick(level)}
                    aria-label={`Level ${level.name}${solvedPuzzles.has(level.id) ? ", solved" : ""}`}
                    aria-current={level.id === currentLevel.id}
                  >
                    {level.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
