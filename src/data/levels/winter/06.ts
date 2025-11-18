import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export default {
  id: "winter06",
  name: "六",
  puzzle: {
    corners: {
      tl: { color: Colors.White },
      tr: { color: Colors.Blue },
      bl: { color: Colors.Blue },
      br: { color: Colors.White },
    },
    tiles: [
      [{ color: Colors.Red }, { color: Colors.Violet }, { color: Colors.Gray }],
      [{ color: Colors.White }, { color: Colors.Orange }, { color: Colors.Pink }],
      [{ color: Colors.Gray }, { color: Colors.Yellow }, { color: Colors.Blue }],
    ],
  },
  reward: {
    image: "/images/rewards/winter/nihonshu.png",
    description: "日本酒 (Nihonshu)",
  }
} as Level
