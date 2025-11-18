import type { ReactNode } from "react"
import "./Background.css"

type BackgroundProps = {
  children?: ReactNode
}

export default function Background({ children }: BackgroundProps) {
  return (
    <div className="background">
      <div className="background__petals">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="background__petal" />
        ))}
      </div>
      {children}
    </div>
  )
}
