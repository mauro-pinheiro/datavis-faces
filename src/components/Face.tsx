import React from "react";
import { FaceProps } from "../interfaces/FaceProps";
import { BackgroundCircle } from "./BackgroundCircle";
import { Eyes } from "./Eyes";
import { FaceContainer } from "./FaceContainer";
import { Mouth } from "./Mouth";

export const Face = ({
    width,
    height,
    centerX,
    centerY,
    eyeRadius,
    strokeWidth,
    eyeOffsetX,
    eyeOffsetY,
    mouthWidth,
    mouthRadius
  }: FaceProps) => (
      <FaceContainer
        width={width}
        height={height}
        centerX={centerX}
        centerY={centerY}
      >
        <BackgroundCircle radius={centerY - strokeWidth / 2} strokeWidth={strokeWidth} />
        <Eyes eyeOffsetX={eyeOffsetX} eyeOffsetY={eyeOffsetY} radius={eyeRadius} />
        <Mouth width={mouthWidth} radius={mouthRadius} />
      </FaceContainer>
    )