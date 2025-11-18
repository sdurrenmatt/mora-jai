import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export default {
  id: "summer03",
  name: "三",
  puzzle: {
    corners: {
      tl: { color: Colors.Blue },
      tr: { color: Colors.Violet },
      bl: { color: Colors.Green },
      br: { color: Colors.Yellow },
    },
    tiles: [
      [{ color: Colors.Blue }, { color: Colors.Blue }, { color: Colors.Gray }],
      [{ color: Colors.Violet }, { color: Colors.Green }, { color: Colors.Gray }],
      [{ color: Colors.Yellow }, { color: Colors.Yellow }, { color: Colors.Green }],
    ],
  },
  reward: {
    image: "/images/rewards/summer/wagasa.png",
    description: "和傘 (Wagasa)",
  }
} as Level
