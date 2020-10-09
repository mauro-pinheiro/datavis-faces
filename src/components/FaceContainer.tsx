import React from "react";
import { FaceContainerProps } from "../interfaces/FaceContainerProps";

export const FaceContainer = ({ children, width, height, centerX, centerY }: FaceContainerProps) => (
    <svg width={width} height={height}>
        <g transform={`translate(${centerX}, ${centerY})`}>
            {children}
        </g>
    </svg>
)