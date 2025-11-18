import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export default {
  id: "spring10",
  name: "十",
  puzzle: {
    corners: {
      tl: { color: Colors.Green },
      tr: { color: Colors.Pink },
      bl: { color: Colors.Blue },
      br: { color: Colors.Yellow },
    },
    tiles: [
      [{ color: Colors.Blue }, { color: Colors.Gray }, { color: Colors.Pink }],
      [{ color: Colors.Gray }, { color: Colors.Gray }, { color: Colors.Gray }],
      [{ color: Colors.Yellow }, { color: Colors.Green }, { color: Colors.Yellow }],
    ],
  },
  reward: {
    image: "/images/rewards/spring/chikurin.png",
    description: "竹林 (Chikurin)",
  }
} as Level
