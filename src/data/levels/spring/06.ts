import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export default {
  id: "spring06",
  name: "六",
  puzzle: {
    corners: {
      tl: { color: Colors.Pink },
      tr: { color: Colors.Yellow },
      bl: { color: Colors.Yellow },
      br: { color: Colors.Pink },
    },
    tiles: [
      [{ color: Colors.Pink }, { color: Colors.Green }, { color: Colors.Gray }],
      [{ color: Colors.Gray }, { color: Colors.Yellow }, { color: Colors.Gray }],
      [{ color: Colors.Gray }, { color: Colors.Yellow }, { color: Colors.Pink }],
    ],
  },
  reward: {
    image: "/images/rewards/spring/koinobori.png",
    description: "鯉幟 (Koinobori)",
  }
} as Level
