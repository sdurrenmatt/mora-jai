import clsx from "clsx"
import type { Reward } from "../../types/level"
import "./PuzzleReward.css"

export type PuzzleRewardProps = {
    reward: Reward
    locked?: boolean
}

export default function PuzzleReward({ reward, locked = false }: PuzzleRewardProps) {
    return (
        <img src={reward.image}
            alt={reward.description}
            className={clsx("puzzle-reward", { "puzzle-reward--locked": locked })}
        />
    )
}
