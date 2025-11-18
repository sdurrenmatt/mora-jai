
import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export const summer9: Level = {
    id: "summer9",
    name: "九",
    puzzle: {
        corners: {
            tl: { color: Colors.White },
            tr: { color: Colors.White },
            bl: { color: Colors.Blue },
            br: { color: Colors.Blue },
        },
        tiles: [
            [{ color: Colors.Gray }, { color: Colors.Blue }, { color: Colors.Orange }],
            [{ color: Colors.White }, { color: Colors.Orange }, { color: Colors.Blue }],
            [{ color: Colors.Orange }, { color: Colors.Gray }, { color: Colors.Orange }],
        ],
    },
    reward: {
        image: "/images/rewards/summer/kingyo.png",
        description: "金魚 (Kingyo)",
    }
}
