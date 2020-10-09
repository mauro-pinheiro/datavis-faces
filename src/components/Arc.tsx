import React from "react";
import { arc } from 'd3';
import { ArcProps } from '../interfaces/ArcProps'

export const Arc = ({ innerRadius, outerRadius, startAngle, endAngle }: ArcProps) => {
    const arco = arc<void>()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius)
        .startAngle(startAngle)
        .endAngle(endAngle)

    return <path d={arco() ?? undefined}/>
}
