import React, { useRef, useEffect } from 'react';
import { color, motion, useCycle, useInView } from 'framer-motion';
import Items from './Items';


const Lista = () => {

    const container = useRef(null)
    const isInView = useInView(container)

    const variants = {
        open: {
            transition: { staggerChildren: 0.07, delayChildren: 0.2 }
        },
        closed: {
            transition: { staggerChildren: 0.05, staggerDirection: -1 }
        }
    };

    const [isOpen, toggleOpen] = useCycle(false, true)


    return (

        <motion.div
            ref={container}
            style={
                {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }
            }
        >

            <motion.button
                style={
                    {
                        padding:'0.8rem 1rem',
                        fontSize: '1rem',
                        backgroundColor:'black',
                        color:'white',
                        border:'none',
                        borderRadius:'15px'
                    }
                }
                whileHover={ { scale: 1.2, cursor: 'pointer' } }
                whileTap={ { scale : 0.5} }
                onClick={toggleOpen}
            > Navegacion </motion.button>
            <motion.ul
                style={
                    {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '0'
                    }
                }
                variants={variants}
                initial='closed'
                animate={isOpen ? "open" : "closed"}
            >
                <Items texto='Primero'></Items>
                <Items texto='Segundo'></Items>
                <Items texto='Primero'></Items>
                <Items texto='Primero'></Items>
            </motion.ul>

        </motion.div>
    );
}

export default Lista;
