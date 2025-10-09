import type { Reward } from "../../types/level"

export type PuzzleRewardProps = {
    reward: Reward
}

function PuzzleReward({ reward }: PuzzleRewardProps) {
    return (
        <img src={reward.image} alt={reward.description} />
    )
}

export default PuzzleReward
