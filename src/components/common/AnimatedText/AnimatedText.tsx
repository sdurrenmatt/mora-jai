import "./AnimatedText.css"

export default function AnimatedText({ text }: { text: string }) {
    return (
        <>
            {text.split("").map((char, index) => (
                <span
                    key={index}
                    className="animated-text__letter"
                >
                    {char === " " ? "\u00A0" : char}
                </span>
            ))}
        </>
    )
}