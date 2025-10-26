import type { Puzzle } from "../lib/puzzle"

export type World = {
    id: string
    name: string
    levels: Level[]
}

export type Difficulty = "Easy" | "Medium" | "Hard" | "Extreme"

export type Reward = {
    image: string
    description: string
}

export type Level = {
    id: string
    name: string
    difficulty: Difficulty
    puzzle: Puzzle
    reward: Reward
}