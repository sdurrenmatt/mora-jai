import { Colors } from "../lib/puzzle"
import type { Move } from "../types/move"

export const moves: Move[] = [
  { id: 1, color: Colors.Gray, text: "Has no effect" },
  { id: 2, color: Colors.White, text: "Turns gray, toggles adjacent tiles white/gray" },
  { id: 3, color: Colors.Black, text: "Shifts the row to the right" },
  { id: 4, color: Colors.Red, text: "Turns black tiles red and white tiles black" },
  { id: 5, color: Colors.Pink, text: "Rotates adjacent and diagonal tiles" },
  { id: 6, color: Colors.Orange, text: "Changes to the majority color among adjacent tiles" },
  { id: 7, color: Colors.Yellow, text: "Moves upward" },
  { id: 8, color: Colors.Green, text: "Swaps with the opposite tile" },
  { id: 9, color: Colors.Blue, text: "Mimics the center tile" },
  { id: 10, color: Colors.Violet, text: "Moves downward" },
]
