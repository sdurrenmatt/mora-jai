import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export default {
  id: "winter02",
  name: "二",
  puzzle: {
    corners: {
      tl: { color: Colors.White },
      tr: { color: Colors.White },
      bl: { color: Colors.White },
      br: { color: Colors.White },
    },
    tiles: [
      [{ color: Colors.Blue }, { color: Colors.White }, { color: Colors.Orange }],
      [{ color: Colors.Gray }, { color: Colors.Gray }, { color: Colors.Violet }],
      [{ color: Colors.Pink }, { color: Colors.Violet }, { color: Colors.Gray }],
    ],
  },
  reward: {
    image: "/images/rewards/winter/usagi.png",
    description: "兎 (Usagi)",
  }
} as Level
