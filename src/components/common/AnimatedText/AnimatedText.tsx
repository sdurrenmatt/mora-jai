import "./AnimatedText.css"

export default function AnimatedText({ text }: { text: string }) {
    return (
        <span className="animated-text" aria-label={text}>
            {text.split("").map((char, index) => (
                <span
                    key={index}
                    className="animated-text__letter"
                    aria-hidden="true"
                >
                    {char === " " ? "\u00A0" : char}
                </span>
            ))}
        </span>
    )
}