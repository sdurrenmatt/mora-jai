import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export default {
  id: "autumn04",
  name: "四",
  puzzle: {
    corners: {
      tl: { color: Colors.Orange },
      tr: { color: Colors.Orange },
      bl: { color: Colors.Orange },
      br: { color: Colors.Orange },
    },
    tiles: [
      [{ color: Colors.Blue }, { color: Colors.Pink }, { color: Colors.White }],
      [{ color: Colors.Orange }, { color: Colors.Gray }, { color: Colors.Green }],
      [{ color: Colors.Pink }, { color: Colors.Red }, { color: Colors.Orange }],
    ],
  },
  reward: {
    image: "/images/rewards/autumn/kiku.png",
    description: "菊 (Kiku)",
  }
} as Level
