
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../sass/layout.scss';

const LayoutId = () => {

    const [select, setSelect] = useState('experiencia')

    const lista = [
        'quien soy',
        'experiencia',
        'estudios',
        'contacto'
    ]

    return (      
        <ul className='menu'>
            { lista.map( ( nombre, key ) => (
                <li 
                    key={key}
                    onClick={ () => setSelect(nombre) }
                >
                    {nombre}
                    { select === nombre ? 
                        <motion.div
                            className='underline'
                            layoutId='underline'
                        ></motion.div>
                        : null
                     }
                </li>
            )) }
        </ul>
    );
}

export default LayoutId;
