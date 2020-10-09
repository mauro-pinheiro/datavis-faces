import React from 'react';
import { CircleProps } from '../interfaces/CircleProps';

export const Circle = ({ cx, cy, radius, strokeWidth, fill, stroke }: CircleProps) => (
    <circle
        cx={cx}
        cy={cy}
        r={radius}
        strokeWidth={strokeWidth}
        fill={fill}
        stroke={stroke}
    />
)