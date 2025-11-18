import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export default {
  id: "autumn01",
  name: "一",
  puzzle: {
    corners: {
      tl: { color: Colors.Red },
      tr: { color: Colors.Red },
      bl: { color: Colors.Red },
      br: { color: Colors.Red },
    },
    tiles: [
      [{ color: Colors.Red }, { color: Colors.White }, { color: Colors.White }],
      [{ color: Colors.Gray }, { color: Colors.Black }, { color: Colors.Black }],
      [{ color: Colors.Gray }, { color: Colors.Red }, { color: Colors.Red }],
    ],
  },
  reward: {
    image: "/images/rewards/autumn/tsukimi.png",
    description: "月見 (Tsukimi)",
  }
} as Level
