
import { Navigate, Route, Routes } from "react-router"
import PuzzleGallery from "./components/PuzzleGallery/PuzzleGallery"
import PuzzleGame from "./components/PuzzleGame/PuzzleGame"
import PuzzleRules from "./components/PuzzleRules/PuzzleRules"
import MainLayout from "./layout/MainLayout"

export default function App() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={null} />
                <Route path="/play" element={<PuzzleGame />} />
                <Route path="/gallery" element={<PuzzleGallery />} />
                <Route path="/rules" element={<PuzzleRules />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
        </Routes>
    )
}
