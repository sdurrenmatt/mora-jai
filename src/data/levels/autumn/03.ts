import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export default {
  id: "autumn03",
  name: "三",
  puzzle: {
    corners: {
      tl: { color: Colors.Orange },
      tr: { color: Colors.Orange },
      bl: { color: Colors.Orange },
      br: { color: Colors.Orange },
    },
    tiles: [
      [{ color: Colors.Blue }, { color: Colors.Green }, { color: Colors.Gray }],
      [{ color: Colors.Orange }, { color: Colors.Pink }, { color: Colors.Gray }],
      [{ color: Colors.Blue }, { color: Colors.Yellow }, { color: Colors.Orange }],
    ],
  },
  reward: {
    image: "/images/rewards/autumn/geisha.png",
    description: "芸者 (Geisha)",
  }
} as Level
