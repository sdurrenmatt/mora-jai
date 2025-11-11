import { useRef, type CSSProperties } from "react"
import { CSSTransition } from "react-transition-group"
import { rules } from "../../data/rules"
import { ColorHexCodes } from "../../styles/colors"
import AnimatedText from "../common/AnimatedText/AnimatedText"
import SectionSeparator from "../common/SectionSeparator/SectionSeparator"
import "./PuzzleRules.css"

export default function PuzzleRules() {
    return (
        <div className="puzzle-rules">
            <section>
                <h2 className="puzzle-rules__title">
                    <AnimatedText text="How To Play" />
                </h2>
                <p className="puzzle-rules__intro">
                    Press to shift the tiles,<br />
                    Corners finding harmony<br />
                    The box shall open.
                </p>
            </section>

            <SectionSeparator />

            <section>
                <h2 className="puzzle-rules__title">
                    <AnimatedText text="Moves" />
                </h2>
                <ul className="puzzle-rules__rules">
                    {rules.map((rule, index) => {
                        const nodeRef = useRef<HTMLLIElement>(null)

                        return (
                            <CSSTransition
                                key={rule.id}
                                nodeRef={nodeRef}
                                appear
                                in
                                timeout={400}
                                classNames="puzzle-rules__rule--pop-in"
                            >
                                <li
                                    ref={nodeRef}
                                    className="puzzle-rules__rule"
                                    style={{ "--i": index } as CSSProperties}
                                >
                                    <div
                                        className="puzzle-rules__rule-color wood-texture wood-texture--light"
                                        style={{ backgroundColor: ColorHexCodes[rule.color] }}
                                        aria-label={`${rule.color} tile`}
                                    />
                                    <div className="puzzle-rules__rule-text">{rule.text}</div>
                                </li>
                            </CSSTransition>
                        )
                    })}
                </ul>
            </section>
        </div>
    )
}
