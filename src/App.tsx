import { Navigate, Route, Routes } from "react-router"
import Credits from "./components/Credits/Credits"
import Gallery from "./components/Gallery/Gallery"
import Game from "./components/Game/Game"
import Layout from "./components/Layout/Layout"
import Rules from "./components/Rules/Rules"

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Game />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
