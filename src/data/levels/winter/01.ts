import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export default {
  id: "winter01",
  name: "一",
  puzzle: {
    corners: {
      tl: { color: Colors.White },
      tr: { color: Colors.White },
      bl: { color: Colors.White },
      br: { color: Colors.White },
    },
    tiles: [
      [{ color: Colors.Green }, { color: Colors.White }, { color: Colors.Black }],
      [{ color: Colors.White }, { color: Colors.Gray }, { color: Colors.White }],
      [{ color: Colors.Black }, { color: Colors.White }, { color: Colors.Yellow }],
    ],
  },
  reward: {
    image: "/images/rewards/winter/ryuu.png",
    description: "竜 (Ryuu)",
  }
} as Level
