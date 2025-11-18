import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export default {
  id: "summer01",
  name: "一",
  puzzle: {
    corners: {
      tl: { color: Colors.Green },
      tr: { color: Colors.Green },
      bl: { color: Colors.Blue },
      br: { color: Colors.Blue },
    },
    tiles: [
      [{ color: Colors.Gray }, { color: Colors.Gray }, { color: Colors.Gray }],
      [{ color: Colors.Green }, { color: Colors.Gray }, { color: Colors.Green }],
      [{ color: Colors.Blue }, { color: Colors.Yellow }, { color: Colors.Blue }],
    ],
  },
  reward: {
    image: "/images/rewards/summer/mugi.png",
    description: "麦 (Mugi)",
  }
} as Level
