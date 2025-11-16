
import rewardImage from "../../../assets/images/rewards/spring/kabuki.png"
import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export const spring4: Level = {
    id: "spring4",
    name: "四",
    puzzle: {
        corners: {
            tl: { color: Colors.Violet },
            tr: { color: Colors.Violet },
            bl: { color: Colors.Violet },
            br: { color: Colors.Violet },
        },
        tiles: [
            [{ color: Colors.Violet }, { color: Colors.Violet }, { color: Colors.Gray }],
            [{ color: Colors.Pink }, { color: Colors.Green }, { color: Colors.Gray }],
            [{ color: Colors.Violet }, { color: Colors.Violet }, { color: Colors.Gray }],
        ],
    },
    reward: {
        image: rewardImage,
        description: "歌舞伎 (Kabuki)",
    }
}
