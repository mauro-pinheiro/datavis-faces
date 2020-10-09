import React from 'react';
import './App.css';

import { Face } from './components/Face';

const width = 960;
const height = 500;

const App = () => (
  <Face
    width={width}
    height={height}
    centerX={width / 2}
    centerY={height / 2}
    eyeRadius={50}
    strokeWidth={10}
    eyeOffsetX={90}
    eyeOffsetY={100}
    mouthWidth={20}
    mouthRadius={140}
  />
)

export default App;
