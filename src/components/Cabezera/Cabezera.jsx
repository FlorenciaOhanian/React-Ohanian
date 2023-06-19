import React from 'react'
import './Cabezera.css'

const Cabezera = () => {
    return (
        <div className='containerCabezera'>
            <div className='textCabezera'>
            <h2 >
                Somos un empresa familiar, donde creamos, con los mejores ingredientes, la comida para toda tu familia.
            </h2>
            </div>
            <div className='imgCabezera'>
            <img  src='/img/agustin.jpg' />
            </div>
        </div>
    )
}

export default Cabezera