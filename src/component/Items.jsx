import React from 'react';
import { motion } from 'framer-motion';
const Items = ( { texto } ) => {



    const variants = {
        open: {
          y: 0,
          opacity: 1,
          transition: {
            y: { stiffness: 1000, velocity: -100 }
          }
        },
        closed: {
          y: 50,
          opacity: 0,
          transition: {
            y: { stiffness: 1000 }
          }
        }
      };



    return (
        <motion.li
            style={ 
                    { 
                        marginTop:'1rem',
                        fontSize:'2rem'
                    } 
                }
            variants={ variants }
        > { texto }</motion.li>
    );
}

export default Items;
