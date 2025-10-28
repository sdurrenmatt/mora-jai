
import { Navigate, Route, Routes } from "react-router"
import MainLayout from "./layout/MainLayout"
import PuzzlePage from "./pages/PuzzlePage/PuzzlePage"

export default function App() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={null} />
                <Route path="/play" element={<PuzzlePage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
        </Routes>
    )
}
