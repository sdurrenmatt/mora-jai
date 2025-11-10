import { useMeasure } from "@uidotdev/usehooks"
import clsx from "clsx"
import { useEffect, useState } from "react"
import { Outlet } from "react-router"
import PuzzleBackground from "../components/PuzzleBackground/PuzzleBackground"
import PuzzleSidebar from "../components/PuzzleSidebar/PuzzleSidebar"
import "./MainLayout.css"

const LG_BREAKPOINT = 1024

export default function MainLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(true)
    const toggleSidebar = () => setSidebarOpen(!sidebarOpen)
    const [ref, { width }] = useMeasure()

    useEffect(() => {
        if ((width ?? 0) >= LG_BREAKPOINT) setSidebarOpen(true)
    }, [width])

    return (
        <PuzzleBackground>
            <div
                ref={ref}
                className="main-layout"
            >
                <aside
                    className={clsx(
                        "main-layout__sidebar",
                        { "main-layout__sidebar--closed": !sidebarOpen }
                    )}>
                    <PuzzleSidebar />
                </aside>

                <main className="main-layout__content">
                    <Outlet />
                </main>

                {(width ?? 0) < LG_BREAKPOINT && (
                    <button
                        className="main-layout__toggle-button"
                        onClick={() => toggleSidebar()}
                    >
                        ☰
                    </button>
                )}
            </div>
        </PuzzleBackground>
    )
}
