
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SelectId = () => {


    const [selectId, setSelectId] = useState(null)

    const lista = [
        {
            name: 'pikachu',
            texto: 'jfndsjhfjd slfjds fidus hfjids ufhdsihiohfds hgfdshgfuiods',
            img: 'https://i.blogs.es/2f5fc7/pikachu/1366_2000.png'
        },
        {
            name: 'bulbasaur',
            texto: 'fjksfj wnfkod snfkodsnkfo pdigofndsognfdsogndsg nfdso',
            img: 'https://cdn.goodvinilos.com/4589/pokemon-bulbasaur.jpg'
        }
    ]


    return (
        <motion.div>
            <motion.ul>
                { lista.map( ( obj, key ) => (
                    <motion.li
                    layoutId={obj.name}
                    onClick={ () => setSelectId(obj) }
                    style={ { cursor: 'pointer' } }
                    >
                        <h3>{obj.name}</h3>
                        <p>{obj.texto}</p>
                    </motion.li>
                )) }
            </motion.ul>
            
                { selectId && (
                    <AnimatePresence>
                        <motion.img
                            layout
                            key={ selectId.name }
                            initial={ { opacity:0 } }
                            animate={ { opacity: 1 } }
                            exit={ { opacity: 0 } }
                            transition={{ duration: 0.2 }}
                            src= { selectId.img }
                            style={ { width: '20%' } }
                            onClick={ () => setSelectId(null) }
                        ></motion.img>
                    </AnimatePresence>
                ) }
            
        </motion.div>
    );
}

export default SelectId;



// terrible

{/* <motion.img
                        layoutId = { selectId.name }
                        initial={ { opacity:0 } }
                        animate={ { opacity: 1 } }
                        ransition={{ duration: 0.2 }}
                        src= { selectId.img }
                        style={ { width: '20%' } }
                        onClick={ () => setSelectId(null) }
                    ></motion.img> */}