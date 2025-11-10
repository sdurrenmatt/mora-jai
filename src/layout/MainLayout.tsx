import { useMeasure } from "@uidotdev/usehooks"
import clsx from "clsx"
import { useEffect, useState } from "react"
import { Outlet } from "react-router"
import PuzzleBackground from "../components/PuzzleBackground/PuzzleBackground"
import PuzzleSidebar from "../components/PuzzleSidebar/PuzzleSidebar"
import "./MainLayout.css"

const LG_BREAKPOINT = 1024
const MIN_ASPECT_RATIO = 4 / 3

export default function MainLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(true)
    const toggleSidebar = () => setSidebarOpen(!sidebarOpen)
    const [ref, { width, height }] = useMeasure()

    const sidebarOverlay = !!width && !!height && (
        width < LG_BREAKPOINT || width / height < MIN_ASPECT_RATIO
    )

    useEffect(() => {
        if (!sidebarOverlay) setSidebarOpen(true)
    }, [sidebarOverlay])

    return (
        <PuzzleBackground>
            <div
                ref={ref}
                className="main-layout"
            >
                <aside
                    className={clsx(
                        "main-layout__sidebar",
                        {
                            "main-layout__sidebar--overlay": sidebarOverlay,
                            "main-layout__sidebar--closed": !sidebarOpen
                        }
                    )}>
                    <PuzzleSidebar onClick={() => sidebarOverlay && toggleSidebar()} />
                </aside>

                <main className="main-layout__content">
                    <Outlet />
                </main>

                {sidebarOverlay && (
                    <button
                        className="main-layout__toggle-button"
                        onClick={toggleSidebar}
                    >
                        ☰
                    </button>
                )}
            </div>
        </PuzzleBackground>
    )
}
