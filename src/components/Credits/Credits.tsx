import { useRef } from "react"
import Separator from "../Separator/Separator"
import "./Credits.css"

export default function Credits() {
  const nodeRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={nodeRef} className="credits">
      <section>
        <h2 className="credits__title">Disclaimer</h2>

        <p className="credits__text">This game is a fan-made tribute to <span className="puzzle_credits__blue-prince">Blue&nbsp;Prince</span> and its <span className="puzzle_credits__mora-jai">Mora&nbsp;Jai</span> puzzle boxes.</p>

        <p className="credits__text">It is provided for free and is not affiliated with or endorsed by the <span className="puzzle_credits__blue-prince">Blue&nbsp;Prince</span> brand.</p>
      </section>

      <Separator />

      <section>
        <h2 className="credits__title">Credits</h2>

        <p className="credits__text">
          Made with <span className="credits__heart">❤️</span> by{" "}
          <a
            href="https://github.com/sdurrenmatt"
            target="_blank"
            rel="noopener noreferrer"
            className="credits__link"
          >
            sdurrenmatt
          </a>.
        </p>

        <p className="credits__text">Built with <span className="credits__tech">React</span>, <span className="credits__tech">TypeScript</span>, and <span className="credits__tech">Vite</span>.</p>
      </section>

      <Separator />

      <section>
        <h2 className="credits__title">Support</h2>

        <p className="credits__text">
          If you enjoy these puzzles and want to support my work, you can{" "}
          <a
            href="https://www.buymeacoffee.com/sdurrenmatt"
            target="_blank"
            rel="noopener noreferrer"
            className="credits__link"
          >
            <span className="credits__coffee" aria-hidden="true">buy me a coffee <span aria-hidden="true">☕</span></span>
          </a>.
        </p>
      </section>
    </div>
  )
}
