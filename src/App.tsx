import React from 'react';
import './App.css';

import { range } from 'd3';
import { Face } from './components/Face';

const width = 200;
const height = 200;

const array = range(9*3);

const App = () => (
  <>
    {array.map((value: number) => (
    <Face
      key={value}
      width={width}
      height={height}
      centerX={width / 2}
      centerY={height / 2}
      eyeRadius={10}
      strokeWidth={10}
      eyeOffsetX={30}
      eyeOffsetY={30}
      mouthWidth={10}
      mouthRadius={40}
    />
  ))}
  </>
);

export default App;
