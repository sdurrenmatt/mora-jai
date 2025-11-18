import { useMeasure } from "@uidotdev/usehooks"
import clsx from "clsx"
import { useEffect, useState } from "react"
import { Outlet } from "react-router"
import Background from "../Background/Background"
import Sidebar from "../Sidebar/Sidebar"
import "./Layout.css"

const LG_BREAKPOINT = 1024
const MIN_ASPECT_RATIO = 4 / 3

export default function Layout() {
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
    <Background>
      <div
        ref={ref}
        className="layout"
      >
        <aside
          className={clsx(
            "layout__sidebar",
            {
              "layout__sidebar--overlay": sidebarOverlay,
              "layout__sidebar--closed": !sidebarOpen
            }
          )}
          aria-hidden={!sidebarOpen}
        >
          <Sidebar onClick={() => sidebarOverlay && toggleSidebar()} />
        </aside>

        <main className="layout__content">
          <Outlet />
        </main>

        {sidebarOverlay && (
          <button
            type="button"
            className="layout__toggle-button"
            onClick={toggleSidebar}
            aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
            aria-expanded={sidebarOpen}
            aria-controls="sidebar"
          >
            ☰
          </button>
        )}
      </div>
    </Background>
  )
}
