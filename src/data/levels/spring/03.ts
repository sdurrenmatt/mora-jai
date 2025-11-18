import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export default {
  id: "spring03",
  name: "三",
  puzzle: {
    corners: {
      tl: { color: Colors.Green },
      tr: { color: Colors.Green },
      bl: { color: Colors.Green },
      br: { color: Colors.Green },
    },
    tiles: [
      [{ color: Colors.Green }, { color: Colors.Green }, { color: Colors.Yellow }],
      [{ color: Colors.Gray }, { color: Colors.Pink }, { color: Colors.Green }],
      [{ color: Colors.Gray }, { color: Colors.Gray }, { color: Colors.Green }],
    ],
  },
  reward: {
    image: "/images/rewards/spring/tanuki.png",
    description: "狸 (Tanuki)",
  }
} as Level
