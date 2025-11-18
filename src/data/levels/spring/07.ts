import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export default {
  id: "spring07",
  name: "七",
  puzzle: {
    corners: {
      tl: { color: Colors.Pink },
      tr: { color: Colors.Yellow },
      bl: { color: Colors.Blue },
      br: { color: Colors.Violet },
    },
    tiles: [
      [{ color: Colors.Violet }, { color: Colors.Gray }, { color: Colors.Yellow }],
      [{ color: Colors.Gray }, { color: Colors.Blue }, { color: Colors.Gray }],
      [{ color: Colors.Violet }, { color: Colors.Pink }, { color: Colors.Gray }],
    ],
  },
  reward: {
    image: "/images/rewards/spring/koto.png",
    description: "箏 (Koto)",
  }
} as Level
