import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export default {
  id: "winter05",
  name: "五",
  puzzle: {
    corners: {
      tl: { color: Colors.White },
      tr: { color: Colors.Blue },
      bl: { color: Colors.Blue },
      br: { color: Colors.White },
    },
    tiles: [
      [{ color: Colors.Blue }, { color: Colors.Gray }, { color: Colors.Gray }],
      [{ color: Colors.Violet }, { color: Colors.Black }, { color: Colors.Green }],
      [{ color: Colors.Black }, { color: Colors.White }, { color: Colors.Orange }],
    ],
  },
  reward: {
    image: "/images/rewards/winter/setsugen.png",
    description: "雪原 (Setsugen)",
  }
} as Level
