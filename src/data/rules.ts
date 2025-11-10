import { Colors } from "../lib/puzzle"
import type { Rule } from "../types/rule"

export const rules: Rule[] = [
    { id: 1, color: Colors.Gray, text: "Has no effect" },
    { id: 2, color: Colors.White, text: "Turns itself gray, and toggles adjacent tiles between white and gray" },
    { id: 3, color: Colors.Black, text: "Shifts the row to the right" },
    { id: 4, color: Colors.Red, text: "Turns all white tiles black, and all black tiles red" },
    { id: 5, color: Colors.Pink, text: "Rotates surrounding tiles clockwise" },
    { id: 6, color: Colors.Orange, text: "Turns to the most common color nearby" },
    { id: 7, color: Colors.Yellow, text: "Moves upward" },
    { id: 8, color: Colors.Green, text: "Swaps with the opposite tile" },
    { id: 9, color: Colors.Blue, text: "Copies the center tile" },
    { id: 10, color: Colors.Violet, text: "Moves downward" },
]
