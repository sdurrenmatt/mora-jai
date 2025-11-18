import { CornerPositions, type CornerPosition, type Corners } from "../../lib/puzzle/types"
import Corner from "./Corner"

type CornersProps = {
  data: Corners
  onCornerClick?: (position: CornerPosition) => void
}

export default function Corners({ data, onCornerClick }: CornersProps) {
  return (
    <>
      {Object.values(CornerPositions).map(position => (
        <Corner
          key={position}
          position={position}
          color={data[position].color}
          matched={data[position].matched}
          onClick={() => onCornerClick?.(position)}
        />
      ))}
    </>
  )
}
