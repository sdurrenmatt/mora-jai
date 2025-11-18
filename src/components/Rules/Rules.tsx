import { useRef, type CSSProperties } from "react"
import { CSSTransition } from "react-transition-group"
import { moves } from "../../data/moves"
import { ColorHexCodes } from "../../styles/colors"
import AnimatedText from "../AnimatedText/AnimatedText"
import Separator from "../Separator/Separator"
import "./Rules.css"

export default function Rules() {
  return (
    <div className="rules">
      <section>
        <h2 className="rules__title">
          <AnimatedText text="How To Play" />
        </h2>

        <p className="rules__how-to-play">
          Press to shift the tiles,<br />
          Corners finding harmony<br />
          The box shall open.
        </p>
      </section>

      <Separator />

      <section>
        <h2 className="rules__title">
          <AnimatedText text="Moves" />
        </h2>

        <ul className="rules__moves">
          {moves.map((move, index) => {
            const nodeRef = useRef<HTMLLIElement>(null)

            return (
              <CSSTransition
                key={move.id}
                nodeRef={nodeRef}
                appear
                in
                timeout={400}
                classNames="rules__move--pop-in"
              >
                <li
                  ref={nodeRef}
                  className="rules__move"
                  style={{ "--i": index } as CSSProperties}
                >
                  <div
                    className="rules__move-color wood-texture wood-texture--light"
                    style={{ backgroundColor: ColorHexCodes[move.color] }}
                    aria-label={`${move.color} tile`}
                  />
                  <div className="rules__move-text">{move.text}</div>
                </li>
              </CSSTransition>
            )
          })}
        </ul>
      </section>
    </div>
  )
}
