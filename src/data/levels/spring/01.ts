import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export default {
  id: "spring01",
  name: "一",
  puzzle: {
    corners: {
      tl: { color: Colors.White },
      tr: { color: Colors.White },
      bl: { color: Colors.White },
      br: { color: Colors.White },
    },
    tiles: [
      [{ color: Colors.Gray }, { color: Colors.Pink }, { color: Colors.Gray }],
      [{ color: Colors.Pink }, { color: Colors.White }, { color: Colors.Pink }],
      [{ color: Colors.Gray }, { color: Colors.Pink }, { color: Colors.Gray }],
    ],
  },
  reward: {
    image: "/images/rewards/spring/shodou.png",
    description: "書道 (Shodou)",
  }
} as Level
