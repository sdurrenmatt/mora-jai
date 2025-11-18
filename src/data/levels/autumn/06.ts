import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export default {
  id: "autumn06",
  name: "六",
  puzzle: {
    corners: {
      tl: { color: Colors.Red },
      tr: { color: Colors.Red },
      bl: { color: Colors.Orange },
      br: { color: Colors.Orange },
    },
    tiles: [
      [{ color: Colors.Gray }, { color: Colors.Green }, { color: Colors.Gray }],
      [{ color: Colors.Violet }, { color: Colors.Black }, { color: Colors.Orange }],
      [{ color: Colors.Orange }, { color: Colors.Gray }, { color: Colors.Red }],
    ],
  },
  reward: {
    image: "/images/rewards/autumn/kitsune.png",
    description: "狐 (Kitsune)",
  }
} as Level
