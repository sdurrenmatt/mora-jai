import type { Reward } from "../../types/level"

export type PuzzleRewardProps = {
    reward: Reward
}

export default function PuzzleReward({ reward }: PuzzleRewardProps) {
    return (
        <img src={reward.image} alt={reward.description} />
    )
}
