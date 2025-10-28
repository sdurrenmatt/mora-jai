import { Route, Routes } from "react-router"
import MainLayout from "./layout/MainLayout"
import PuzzlePage from "./pages/PuzzlePage/PuzzlePage"

export default function App() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<PuzzlePage />} />
            </Route>
        </Routes>
    )
}
