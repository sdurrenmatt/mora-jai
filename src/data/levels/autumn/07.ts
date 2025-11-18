import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export default {
  id: "autumn07",
  name: "七",
  puzzle: {
    corners: {
      tl: { color: Colors.Black },
      tr: { color: Colors.Black },
      bl: { color: Colors.Orange },
      br: { color: Colors.Orange },
    },
    tiles: [
      [{ color: Colors.White }, { color: Colors.Green }, { color: Colors.Orange }],
      [{ color: Colors.Orange }, { color: Colors.Gray }, { color: Colors.Red }],
      [{ color: Colors.Orange }, { color: Colors.Yellow }, { color: Colors.Gray }],
    ],
  },
  reward: {
    image: "/images/rewards/autumn/nou.png",
    description: "能 (Nou)",
  }
} as Level
