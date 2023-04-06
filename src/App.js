
import './sass/app.scss';
import React, { useState , useRef, useEffect} from 'react';
import { color, motion , useMotionValueEvent, useScroll, useSpring, useTransform} from 'framer-motion';
import Parallax from './component/Parallax';
import InView from './component/InView';


function App() {
  
  return (
    <div className='App'>
      <Parallax></Parallax>
      <InView></InView>
    </div>
  );
}

export default App;
