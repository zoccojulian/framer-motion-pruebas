import React from 'react';
import { animations, motion , useCycle} from 'framer-motion';
const AnimacionK = () => {


    return (
        <motion.div
            style={
                {
                    width:'100px',
                    height:'100px',
                    backgroundColor:'#ffffff',
                    borderRadius:'20%'
                }
            }
            transition={
                {
                    duration:2,
                    times:[0, 0.2 , 0.6 , 1]
                }
            }
            whileHover={
                {
                    backgroundColor:["#ffffff", "#7700ff", "rgb(230, 255, 0)", "#ff008c"],
                    scale:[ 1 , 1.5 , 2 , 4],
                    borderRadius: [ '20%', '0%', '100%', '40%' ]
                }
            }

        >
            
        </motion.div>
    );
}

export default AnimacionK;
