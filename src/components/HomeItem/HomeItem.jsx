import React from 'react'
import './HomeItem.css'
import { Link } from 'react-router-dom';
const HomeItem = ({ name, categoria,img }) => {

    return (
        <div className='homeItemContainer'>
            <p>
                {name}
            </p>
            <img src={img} alt="" />
            <div className='btnContainer'>

            <Link to={`/categoria/${categoria}`}> Ver mas...</Link>
            </div>
        </div>
    )
}

export default HomeItem;