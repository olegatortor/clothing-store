import { useState } from 'react';

import linkArr from '../assets/icons/linkArr.svg';

import '../assets/scss/gender.scss'

const ItemGender = ({color, src}) => {
    const [hover, setHover] = useState(false)

    const showHover = () => {
        setHover(true)
    }

    const hideHover = () => {
        setHover(false)
    }

    return(
        <div href='#' className='gender__item' style={{backgroundColor: color}} onMouseOver={showHover} onMouseOut={hideHover}>

        <div className={`offset ${hover ? 'show': ''}`}>
            <a href="#">
                <div>До каталогу</div>
                <img src={linkArr} alt="Стрілка"/>
            </a>
        </div>

            <img src={`./assets/images/${src}.jpg`}/>
        </div>
    )
}

export default ItemGender;