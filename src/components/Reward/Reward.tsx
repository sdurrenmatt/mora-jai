import clsx from "clsx"
import type { Reward } from "../../types/level"
import "./Reward.css"

export type RewardProps = {
  data: Reward
  locked?: boolean
}

export default function Reward({ data, locked = false }: RewardProps) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}${data.image}`}
      alt={locked ? "Locked" : data.description}
      className={clsx("reward", { "reward--locked": locked })}
    />
  )
}
