import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export default {
  id: "autumn05",
  name: "五",
  puzzle: {
    corners: {
      tl: { color: Colors.Red },
      tr: { color: Colors.Red },
      bl: { color: Colors.Orange },
      br: { color: Colors.Orange },
    },
    tiles: [
      [{ color: Colors.Orange }, { color: Colors.Orange }, { color: Colors.Gray }],
      [{ color: Colors.Black }, { color: Colors.White }, { color: Colors.Red }],
      [{ color: Colors.Gray }, { color: Colors.Orange }, { color: Colors.Orange }],
    ],
  },
  reward: {
    image: "/images/rewards/autumn/shigure.png",
    description: "時雨 (Shigure)",
  }
} as Level
