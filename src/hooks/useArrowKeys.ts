import { useEffect } from 'react'

export function useArrowKeys(onLeft: () => void, onRight: () => void) {
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') onLeft()
            if (e.key === 'ArrowRight') onRight()
        }
        window.addEventListener('keydown', handler)
        return () => window.removeEventListener('keydown', handler)
    }, [onLeft, onRight])
}
