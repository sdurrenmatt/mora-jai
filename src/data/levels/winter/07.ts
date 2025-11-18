import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export default {
  id: "winter07",
  name: "七",
  puzzle: {
    corners: {
      tl: { color: Colors.Black },
      tr: { color: Colors.Blue },
      bl: { color: Colors.Blue },
      br: { color: Colors.Black },
    },
    tiles: [
      [{ color: Colors.Red }, { color: Colors.Red }, { color: Colors.White }],
      [{ color: Colors.Orange }, { color: Colors.Orange }, { color: Colors.Blue }],
      [{ color: Colors.White }, { color: Colors.Yellow }, { color: Colors.Pink }],
    ],
  },
  reward: {
    image: "/images/rewards/winter/shinobi.png",
    description: "忍び (Shinobi)",
  }
} as Level
