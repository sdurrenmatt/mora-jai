import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export default {
  id: "winter09",
  name: "九",
  puzzle: {
    corners: {
      tl: { color: Colors.White },
      tr: { color: Colors.White },
      bl: { color: Colors.White },
      br: { color: Colors.White },
    },
    tiles: [
      [{ color: Colors.Orange }, { color: Colors.White }, { color: Colors.Red }],
      [{ color: Colors.Blue }, { color: Colors.Pink }, { color: Colors.Blue }],
      [{ color: Colors.Red }, { color: Colors.Red }, { color: Colors.Gray }],
    ],
  },
  reward: {
    image: "/images/rewards/winter/ikebana.png",
    description: "生け花 (Ikebana)",
  }
} as Level
