import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export default {
  id: "winter08",
  name: "八",
  puzzle: {
    corners: {
      tl: { color: Colors.Black },
      tr: { color: Colors.Blue },
      bl: { color: Colors.Blue },
      br: { color: Colors.Black },
    },
    tiles: [
      [{ color: Colors.Black }, { color: Colors.Blue }, { color: Colors.Gray }],
      [{ color: Colors.Gray }, { color: Colors.Violet }, { color: Colors.Yellow }],
      [{ color: Colors.White }, { color: Colors.Red }, { color: Colors.Orange }],
    ],
  },
  reward: {
    image: "/images/rewards/winter/jinja.png",
    description: "神社 (Jinja)",
  }
} as Level
