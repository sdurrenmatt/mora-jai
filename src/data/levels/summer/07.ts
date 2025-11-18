import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export default {
  id: "summer07",
  name: "七",
  puzzle: {
    corners: {
      tl: { color: Colors.Red },
      tr: { color: Colors.Red },
      bl: { color: Colors.Blue },
      br: { color: Colors.Blue },
    },
    tiles: [
      [{ color: Colors.Gray }, { color: Colors.Gray }, { color: Colors.Gray }],
      [{ color: Colors.Gray }, { color: Colors.Black }, { color: Colors.Blue }],
      [{ color: Colors.Gray }, { color: Colors.Red }, { color: Colors.White }],
    ],
  },
  reward: {
    image: "/images/rewards/summer/hanabi.png",
    description: "花火 (Hanabi)",
  }
} as Level
