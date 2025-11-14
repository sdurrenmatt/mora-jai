
import rewardImage from "../../../assets/images/rewards/summer/hamabe.png"
import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export const summer6: Level = {
    id: "summer6",
    name: "六",
    puzzle: {
        corners: {
            tl: { color: Colors.Violet },
            tr: { color: Colors.Violet },
            bl: { color: Colors.Violet },
            br: { color: Colors.Violet },
        },
        tiles: [
            [{ color: Colors.Violet }, { color: Colors.Gray }, { color: Colors.Gray }],
            [{ color: Colors.Violet }, { color: Colors.Blue }, { color: Colors.Gray }],
            [{ color: Colors.Gray }, { color: Colors.Pink }, { color: Colors.Orange }],
        ],
    },
    reward: {
        image: rewardImage,
        description: "浜辺 (Hamabe)",
    }
}
