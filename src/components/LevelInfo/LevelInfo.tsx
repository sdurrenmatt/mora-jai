import { useContext } from "react"
import { GameContext } from "../../context/GameContext"
import AnimatedText from "../AnimatedText/AnimatedText"
import "./LevelInfo.css"

export default function LevelInfo() {
  const { currentWorld, currentLevel } = useContext(GameContext)

  return (
    <div className="level-info-container">
      <div
        className="level-info"
        role="region"
        aria-label="Level information"
      >
        <div
          className="level-info__world"
          aria-label="Current world"
        >
          <AnimatedText text={currentWorld} />
        </div>

        <div
          className="level-info__level"
          aria-label="Current level"
        >
          <AnimatedText text={`Level ${currentLevel.name}`} />
        </div>
      </div>
    </div>
  )
}
