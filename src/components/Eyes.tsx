import React from "react";
import { Eye } from './Eye';

export const Eyes = ({ eyeOffsetX, eyeOffsetY, radius }: {eyeOffsetX: number, eyeOffsetY: number, radius: number}) => (
    <>
        <Eye offsetX={-eyeOffsetX} offsetY={-eyeOffsetY} radius={radius}/>
        <Eye offsetX={+eyeOffsetX} offsetY={-eyeOffsetY} radius={radius}/>
    </>
)