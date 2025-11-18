import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export default {
  id: "autumn09",
  name: "九",
  puzzle: {
    corners: {
      tl: { color: Colors.Orange },
      tr: { color: Colors.Orange },
      bl: { color: Colors.Orange },
      br: { color: Colors.Orange },
    },
    tiles: [
      [{ color: Colors.White }, { color: Colors.Orange }, { color: Colors.Gray }],
      [{ color: Colors.Orange }, { color: Colors.Blue }, { color: Colors.Gray }],
      [{ color: Colors.Black }, { color: Colors.Green }, { color: Colors.Yellow }],
    ],
  },
  reward: {
    image: "/images/rewards/autumn/sushi.png",
    description: "寿司 (Sushi)",
  }
} as Level
