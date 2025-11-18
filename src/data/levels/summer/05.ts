import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export default {
  id: "summer05",
  name: "五",
  puzzle: {
    corners: {
      tl: { color: Colors.Blue },
      tr: { color: Colors.Blue },
      bl: { color: Colors.Blue },
      br: { color: Colors.Blue },
    },
    tiles: [
      [{ color: Colors.White }, { color: Colors.Blue }, { color: Colors.Green }],
      [{ color: Colors.Black }, { color: Colors.Green }, { color: Colors.Gray }],
      [{ color: Colors.White }, { color: Colors.Gray }, { color: Colors.White }],
    ],
  },
  reward: {
    image: "/images/rewards/summer/kaeru.png",
    description: "蛙 (Kaeru)",
  }
} as Level
