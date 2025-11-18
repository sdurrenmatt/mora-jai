import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export default {
  id: "spring05",
  name: "五",
  puzzle: {
    corners: {
      tl: { color: Colors.Green },
      tr: { color: Colors.Yellow },
      bl: { color: Colors.Yellow },
      br: { color: Colors.Green },
    },
    tiles: [
      [{ color: Colors.Pink }, { color: Colors.Gray }, { color: Colors.Gray }],
      [{ color: Colors.Gray }, { color: Colors.Gray }, { color: Colors.Yellow }],
      [{ color: Colors.Green }, { color: Colors.Green }, { color: Colors.Yellow }],
    ],
  },
  reward: {
    image: "/images/rewards/spring/hanami.png",
    description: "花見 (Hanami)",
  }
} as Level
