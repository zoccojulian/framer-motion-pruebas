import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion/dist/framer-motion';




const InView = () => {

    const referencia = useRef(null)
    const isInView = useInView(referencia)

    useEffect(() => {
        console.log("Element is in view: ", isInView)
      }, [isInView])

    return (
        <div className='container' ref={ referencia }>
            {isInView && 
                <motion.img 
                    src='https://www.icegif.com/wp-content/uploads/2022/01/icegif-1479.gif'
                    initial={{ opacity:0, transform:'translateX(-100px)'}}
                    animate={{opacity:1, transform:'translateX(0px)'}}
                    // exit={{opacity:0}}
                    transition={{delay:1}}
                ></motion.img>
            }
        </div>
    );
}

export default InView;
