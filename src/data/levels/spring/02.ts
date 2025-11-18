import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export default {
  id: "spring02",
  name: "二",
  puzzle: {
    corners: {
      tl: { color: Colors.White },
      tr: { color: Colors.White },
      bl: { color: Colors.White },
      br: { color: Colors.White },
    },
    tiles: [
      [{ color: Colors.Pink }, { color: Colors.Gray }, { color: Colors.Gray }],
      [{ color: Colors.Pink }, { color: Colors.Green }, { color: Colors.Green }],
      [{ color: Colors.White }, { color: Colors.Gray }, { color: Colors.Gray }],
    ],
  },
  reward: {
    image: "/images/rewards/spring/sensu.png",
    description: "扇子 (Sensu)",
  }
} as Level
