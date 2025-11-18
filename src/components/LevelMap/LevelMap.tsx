import { worlds } from "../../data/worlds"
import Scroll from "../Scroll/Scroll"
import "./LevelMap.css"

export default function LevelMap() {
  return (
    <div className="level-map-container">
      <div
        className="level-map"
        role="region"
        aria-label="Level map"
      >
        {worlds.map((world) => (
          <Scroll key={world.id} world={world} />
        ))}
      </div>
    </div>
  )
}
