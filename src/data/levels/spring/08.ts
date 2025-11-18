import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export default {
  id: "spring08",
  name: "八",
  puzzle: {
    corners: {
      tl: { color: Colors.Green },
      tr: { color: Colors.Pink },
      bl: { color: Colors.Pink },
      br: { color: Colors.Green },
    },
    tiles: [
      [{ color: Colors.Pink }, { color: Colors.Yellow }, { color: Colors.Gray }],
      [{ color: Colors.Gray }, { color: Colors.Gray }, { color: Colors.Green }],
      [{ color: Colors.Gray }, { color: Colors.Green }, { color: Colors.Pink }],
    ],
  },
  reward: {
    image: "/images/rewards/spring/samurai.png",
    description: "侍 (Samurai)",
  }
} as Level
