import React, { useState , useRef, useEffect} from 'react';
import { color, motion , useMotionValueEvent, useScroll, useSpring, useTransform} from 'framer-motion';

const Parallax = () => {

    const useParallax = ( value ,arr, d1, d2) => {
        return useTransform(value,arr,[d1, d2])
    }
    const referencia = useRef(null);
    const {scrollYProgress} = useScroll({target: referencia})
    const movimientoenX = useParallax(scrollYProgress,[1,0.5],'-50vw','0vw')
    const [movX, setMovX] = useState('0vw');

    const movimientoX2 = useParallax(scrollYProgress,[1,0.5],'50vw','0vw');
    const [mov2x, setMov2x] = useState('0vw')

    // const scrollX = useSpring(scrollYProgress);


    useMotionValueEvent(scrollYProgress, "change", (ev) => {
        setMovX(movimientoenX.current)
        setMov2x(movimientoX2.current)
        // console.log(movimientoenX.current)
        
    })


    return (
        <div className='container' >
            <motion.h1
                className='texto'
                initial={{x:-200}}
                animate={{x:0}}
                transition={{duration: 1, type:'spring'}}
                ref={referencia}
            >hola</motion.h1>
            <motion.h2
                className='nombre'
                style={{transform: `translateX(${movX})`}}
            >
            Julian Zocco
            </motion.h2>
            <motion.img 
                    src='https://www.icegif.com/wp-content/uploads/2022/01/icegif-1479.gif'
                    // initial={{ opacity:0}}
                    // animate={{opacity:1}}
                    style={{transform: `translateX(${mov2x})`}}
                    transition={{delay:1}}
                ></motion.img>
            <motion.div
                className='caja'
                // style={{scaleX: scrollX}}
            >
            </motion.div>
        </div>
    );
}

export default Parallax;
