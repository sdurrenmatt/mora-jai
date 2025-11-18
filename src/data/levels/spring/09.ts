import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export default {
  id: "spring09",
  name: "九",
  puzzle: {
    corners: {
      tl: { color: Colors.Violet },
      tr: { color: Colors.White },
      bl: { color: Colors.White },
      br: { color: Colors.Violet },
    },
    tiles: [
      [{ color: Colors.Green }, { color: Colors.Gray }, { color: Colors.Violet }],
      [{ color: Colors.Gray }, { color: Colors.Gray }, { color: Colors.Gray }],
      [{ color: Colors.Violet }, { color: Colors.White }, { color: Colors.Pink }],
    ],
  },
  reward: {
    image: "/images/rewards/spring/tougei.png",
    description: "陶芸 (Tougei)",
  }
} as Level
