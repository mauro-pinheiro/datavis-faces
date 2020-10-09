import React from "react";
import { Circle } from "./Circle";

export const BackgroundCircle = ({ radius, strokeWidth }: {radius: number, strokeWidth: number}) => (
    <Circle radius={radius} strokeWidth={strokeWidth} fill='yellow' stroke='black'/>
);