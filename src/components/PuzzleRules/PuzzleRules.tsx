import { useRef } from "react"
import { CSSTransition } from "react-transition-group"
import { rules } from "../../data/rules"
import { ColorHexCodes } from "../../styles/colors"
import AnimatedText from "../common/AnimatedText/AnimatedText"
import "./PuzzleRules.css"
import SectionSeparator from "../common/SectionSeparator/SectionSeparator"

export default function PuzzleRules() {
    return (
        <div className="puzzle-rules">
            <section className="puzzle-rules__intro" aria-label="How To Play">
                <div className="puzzle-rules__title">
                    <AnimatedText text="How To Play" />
                </div>
                <p className="puzzle-rules__intro">
                    Press to shift the tiles,<br />
                    Corners finding harmony<br />
                    The box shall open.
                </p>
            </section>

            <SectionSeparator />

            <section className="puzzle-rules__moves" aria-label="Moves">
                <div className="puzzle-rules__title">
                    <AnimatedText text="Moves" />
                </div>
                {rules.map((rule, index) => {
                    const nodeRef = useRef<HTMLDivElement>(null)

                    return (
                        <CSSTransition
                            key={rule.id}
                            nodeRef={nodeRef}
                            appear
                            in
                            timeout={400}
                            classNames="puzzle-rules__rule--pop-in"
                        >
                            <div
                                ref={nodeRef}
                                className="puzzle-rules__rule"
                                style={{ "--i": index } as React.CSSProperties}
                            >
                                <div
                                    className="puzzle-rules__color wood-texture wood-filter--light"
                                    style={{ backgroundColor: ColorHexCodes[rule.color] }}
                                />
                                <div className="puzzle-rules__text">{rule.text}</div>
                            </div>
                        </CSSTransition>
                    )
                })}
            </section>
        </div>
    )
}
