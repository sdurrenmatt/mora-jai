import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export default {
  id: "summer06",
  name: "六",
  puzzle: {
    corners: {
      tl: { color: Colors.Violet },
      tr: { color: Colors.Violet },
      bl: { color: Colors.Violet },
      br: { color: Colors.Violet },
    },
    tiles: [
      [{ color: Colors.Violet }, { color: Colors.Gray }, { color: Colors.Gray }],
      [{ color: Colors.Violet }, { color: Colors.Blue }, { color: Colors.Gray }],
      [{ color: Colors.Gray }, { color: Colors.Pink }, { color: Colors.Orange }],
    ],
  },
  reward: {
    image: "/images/rewards/summer/hamabe.png",
    description: "浜辺 (Hamabe)",
  }
} as Level
