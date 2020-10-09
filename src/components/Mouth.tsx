import React from "react"
import { Arc } from "./Arc"


export const Mouth = ({ width, radius }: { width: number, radius: number }) => (
    <Arc
        innerRadius={radius}
        outerRadius={radius + width}
        startAngle={Math.PI / 2}
        endAngle={Math.PI * 3 / 2}
    />
)