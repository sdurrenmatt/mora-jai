import { useRef } from "react"
import SectionSeparator from "../common/SectionSeparator/SectionSeparator"
import "./PuzzleCredits.css"

export default function PuzzleCredits() {
    const nodeRef = useRef<HTMLDivElement>(null)

    return (
        <div ref={nodeRef} className="puzzle-credits">
            <section>
                <h2 className="puzzle-credits__title">Disclaimer</h2>

                <p className="puzzle-credits__text">This game is a fan-made tribute to <span className="puzzle_credits__blue-prince">Blue&nbsp;Prince</span> and its <span className="puzzle_credits__mora-jai">Mora&nbsp;Jai</span> puzzle boxes.</p>

                <p className="puzzle-credits__text">It is provided for free and is not affiliated with or endorsed by the <span className="puzzle_credits__blue-prince">Blue&nbsp;Prince</span> brand.</p>
            </section>

            <SectionSeparator />

            <section>
                <h2 className="puzzle-credits__title">Credits</h2>

                <p className="puzzle-credits__text">
                    Made with <span className="puzzle-credits__heart">❤️</span> by{" "}
                    <a
                        href="https://github.com/sdurrenmatt"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="puzzle-credits__link"
                    >
                        sdurrenmatt
                    </a>.
                </p>

                <p className="puzzle-credits__text">Built with <span className="puzzle-credits__tech">React</span>, <span className="puzzle-credits__tech">TypeScript</span>, and <span className="puzzle-credits__tech">Vite</span>.</p>
            </section>

            <SectionSeparator />

            <section>
                <h2 className="puzzle-credits__title">Support</h2>

                <p className="puzzle-credits__text">
                    If you enjoy these puzzles and want to support my work, you can{" "}
                    <a
                        href="https://www.buymeacoffee.com/sdurrenmatt"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="puzzle-credits__link"
                    >
                        <span className="puzzle-credits__coffee" aria-hidden="true">buy me a coffee <span aria-hidden="true">☕</span></span>
                    </a>.
                </p>
            </section>
        </div>
    )
}
