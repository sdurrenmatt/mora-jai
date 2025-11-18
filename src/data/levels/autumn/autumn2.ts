
import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export const autumn2: Level = {
    id: "autumn2",
    name: "二",
    puzzle: {
        corners: {
            tl: { color: Colors.Red },
            tr: { color: Colors.Red },
            bl: { color: Colors.Red },
            br: { color: Colors.Red },
        },
        tiles: [
            [{ color: Colors.White }, { color: Colors.Blue }, { color: Colors.Yellow }],
            [{ color: Colors.Red }, { color: Colors.Black }, { color: Colors.Gray }],
            [{ color: Colors.Gray }, { color: Colors.Yellow }, { color: Colors.White }],
        ],
    },
    reward: {
        image: "/images/rewards/autumn/roji.png",
        description: "露地 (Roji)",
    }
}
