import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export default {
  id: "summer02",
  name: "二",
  puzzle: {
    corners: {
      tl: { color: Colors.Blue },
      tr: { color: Colors.Blue },
      bl: { color: Colors.White },
      br: { color: Colors.White },
    },
    tiles: [
      [{ color: Colors.Gray }, { color: Colors.Green }, { color: Colors.Gray }],
      [{ color: Colors.White }, { color: Colors.White }, { color: Colors.Green }],
      [{ color: Colors.Blue }, { color: Colors.Green }, { color: Colors.Gray }],
    ],
  },
  reward: {
    image: "/images/rewards/summer/hotaru.png",
    description: "蛍 (Hotaru)",
  }
} as Level
