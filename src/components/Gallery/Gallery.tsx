import { useContext, useRef, useState, type CSSProperties } from "react"
import { CSSTransition } from "react-transition-group"
import { GameContext } from "../../context/GameContext"
import { worlds } from "../../data/worlds"
import AnimatedText from "../AnimatedText/AnimatedText"
import Reward from "../Reward/Reward"
import "./Gallery.css"

export default function Gallery() {
  const { solvedPuzzles } = useContext(GameContext)
  const [currentWorldIndex, setCurrentWorldIndex] = useState(0)
  const world = worlds[currentWorldIndex]

  const selectPreviousWorld = () => setCurrentWorldIndex((currentWorldIndex - 1 + worlds.length) % worlds.length)
  const selectNextWorld = () => setCurrentWorldIndex((currentWorldIndex + 1) % worlds.length)

  return (
    <div className="gallery">
      <div className="gallery__world">
        <button
          type="button"
          onClick={selectPreviousWorld}
          className="gallery__button"
          aria-label="Previous world"
        >
          &lt;
        </button>
        <span className="gallery__world-name" aria-live="polite">
          <AnimatedText text={world.name} />
        </span>
        <button
          type="button"
          onClick={selectNextWorld}
          className="gallery__button"
          aria-label="Next world"
        >
          &gt;
        </button>
      </div>

      <ul className="gallery__rewards">
        {world.levels.map((level, index) => {
          const nodeRef = useRef<HTMLLIElement>(null)
          const locked = !solvedPuzzles.has(level.id)

          return (
            <CSSTransition
              key={level.id}
              nodeRef={nodeRef}
              appear
              in
              timeout={550}
              classNames="gallery__reward--pop-in"
              style={{ '--i': index } as CSSProperties}
            >
              <li ref={nodeRef} className="gallery__reward">
                <Reward data={level.reward} locked={locked} />
                <div
                  className="gallery__reward-description"
                  aria-hidden="true"
                >
                  {locked ? "???" : level.reward.description}
                </div>
              </li>
            </CSSTransition>
          )
        })}
      </ul>
    </div>
  )
}