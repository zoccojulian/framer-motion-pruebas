
import './sass/app.scss';
import React, { useRef, useEffect} from 'react';
import { color, motion , useInView} from 'framer-motion';
import Parallax from './component/Parallax';
import InView from './component/InView';
import { TextField } from '@mui/material';
import Lista from './component/Lista';
import AnimacionK from './component/AnimacionK';
import LayoutId from './component/LayoutId';
import SelectId from './component/SelectId';


function App() {

  const form = useRef(null)
  const isView = useInView(form)

  const variants = {
    on: {
        opacity: 0
    },
    off: {
        opacity: 1
    }
  }

  useEffect(() => {
    console.log('atroden')
  }, [isView])
  
  return (
    <div className='App'>
      <Parallax></Parallax>
      <InView></InView>
      <LayoutId></LayoutId>
      <SelectId></SelectId>
      <Lista></Lista>
      <AnimacionK></AnimacionK>
    </div>
  );
}

export default App;
