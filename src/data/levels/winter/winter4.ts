
import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export const winter4: Level = {
    id: "winter4",
    name: "四",
    puzzle: {
        corners: {
            tl: { color: Colors.Blue },
            tr: { color: Colors.Blue },
            bl: { color: Colors.Blue },
            br: { color: Colors.Blue },
        },
        tiles: [
            [{ color: Colors.Orange }, { color: Colors.Black }, { color: Colors.Blue }],
            [{ color: Colors.White }, { color: Colors.Gray }, { color: Colors.Yellow }],
            [{ color: Colors.Gray }, { color: Colors.Red }, { color: Colors.Gray }],
        ],
    },
    reward: {
        image: "/images/rewards/winter/onsen.png",
        description: "温泉 (Onsen)",
    }
}
