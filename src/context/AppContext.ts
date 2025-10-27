import { createContext, useCallback, useMemo, useState } from "react"
import { worlds } from "../data/worlds"
import type { Level, World } from "../types/level"

export type AppContextType = {
    currentWorld: World
    currentLevel: Level
    solvedPuzzles: Set<string>
    setCurrentWorld: (world: World) => void
    setCurrentLevel: (level: Level) => void
    addSolvedPuzzle: (levelId: string) => void
}

export const AppContext = createContext<AppContextType>({
    currentWorld: worlds[0],
    currentLevel: worlds[0].levels[0],
    solvedPuzzles: new Set<string>(),
    setCurrentWorld: () => { },
    setCurrentLevel: () => { },
    addSolvedPuzzle: () => { },
})

export function useGameState() {
    const [currentWorld, setCurrentWorld] = useState<World>(worlds[0])
    const [currentLevel, setCurrentLevel] = useState<Level>(worlds[0].levels[0])

    const [solvedPuzzles, setSolvedPuzzles] = useState<Set<string>>(() => {
        const saved = localStorage.getItem("solvedPuzzles")
        return saved ? new Set(JSON.parse(saved)) : new Set()
    })

    const addSolvedPuzzle = useCallback((levelId: string) => {
        setSolvedPuzzles(prev => {
            const next = new Set(prev).add(levelId)
            localStorage.setItem("solvedPuzzles", JSON.stringify([...next]))
            return next
        })
    }, [])

    return useMemo(() => ({
        currentWorld,
        currentLevel,
        solvedPuzzles,
        setCurrentWorld,
        setCurrentLevel,
        addSolvedPuzzle,
    }), [
        currentWorld,
        currentLevel,
        solvedPuzzles,
        setCurrentWorld,
        setCurrentLevel,
        addSolvedPuzzle,
    ])
}
