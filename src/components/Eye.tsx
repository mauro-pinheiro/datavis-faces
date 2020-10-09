import React from "react";
import { Circle } from "./Circle";

export const Eye = ({ offsetX, offsetY, radius }: {offsetX: number, offsetY: number, radius: number}) => (
  <Circle cx={offsetX} cy={offsetY} radius={radius}/>
)