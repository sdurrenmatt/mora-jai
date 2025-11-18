
import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export const winter10: Level = {
    id: "winter10",
    name: "十",
    puzzle: {
        corners: {
            tl: { color: Colors.White },
            tr: { color: Colors.White },
            bl: { color: Colors.White },
            br: { color: Colors.White },
        },
        tiles: [
            [{ color: Colors.Orange }, { color: Colors.Green }, { color: Colors.Orange }],
            [{ color: Colors.White }, { color: Colors.Blue }, { color: Colors.Red }],
            [{ color: Colors.White }, { color: Colors.Yellow }, { color: Colors.Blue }],
        ],
    },
    reward: {
        image: "/images/rewards/winter/hina.png",
        description: "雛 (Hina)",
    }
}
