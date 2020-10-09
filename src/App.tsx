import React, { VoidFunctionComponent } from 'react';
import { arc } from 'd3';
import './App.css';

const width = 960;
const height = 500;

const centerX = width / 2;
const centerY = height / 2;
const eyeRadius = 50;

const strokeWidth = 10;

const eyeOffsetX = 90;
const eyeOffsetY = 100;

const mouthWidth = 20;
const mouthRadius = 140;

const mouthArc = arc<void>()
  .innerRadius(mouthRadius)
  .outerRadius(mouthRadius + mouthWidth)
  .startAngle(Math.PI / 2)
  .endAngle(Math.PI * 3/2);

function App() {
  return (
    <svg
      width={width}
      height={height}
    >
      <g transform={`translate(${centerX}, ${centerY})`}>
        <circle
          r={centerY - strokeWidth / 2}
          fill="yellow"
          stroke="black"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={-eyeOffsetX}
          cy={-eyeOffsetY}
          r={eyeRadius}
        />
        <circle
          cx={+eyeOffsetX}
          cy={-eyeOffsetY}
          r={eyeRadius}
        />
        <path d={mouthArc() ?? undefined} />
      </g>
    </svg>
  );
}

export default App;
