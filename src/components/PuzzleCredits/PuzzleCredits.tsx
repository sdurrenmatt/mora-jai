import SectionSeparator from "../common/SectionSeparator/SectionSeparator"
import "./PuzzleCredits.css"

export default function PuzzleCredits() {
    return (
        <div className="puzzle-credits">
            <section aria-label="Disclaimer">
                <p className="puzzle-credits__title">Disclaimer</p>
                <p className="puzzle-credits__text">
                    This game is a fan-made tribute to <span className="puzzle_credits__blue-prince">Blue Prince</span> and its <span className="puzzle_credits__mora-jai">Mora Jai</span> puzzle boxes.
                    It is provided for free and is not affiliated with or endorsed by the <span className="puzzle_credits__blue-prince">Blue Prince</span> brand.
                </p>
            </section>

            <SectionSeparator />

            <section aria-label="Credits">
                <p className="puzzle-credits__title">Credits</p>
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

            <section aria-label="Support">
                <p className="puzzle-credits__title">Support</p>
                <p className="puzzle-credits__text">
                    If you enjoy these puzzles and want to support my work, you can{" "}
                    <a
                        href="https://www.buymeacoffee.com/sdurrenmatt"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="puzzle-credits__link"
                    >
                        <span className="puzzle-credits__coffee">buy me a coffee ☕</span>
                    </a>.
                </p>
            </section>
        </div>
    )
}
