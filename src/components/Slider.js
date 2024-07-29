import { useCallback, useEffect, useState } from 'react';

import { MainServices } from '../assets/services/MainServices'
import Slide from './Slide';

import '../assets/scss/slider.scss';

import left from '../assets/icons/left.svg';
import right from '../assets/icons/right.svg';

const TRANSITION_DURATION = 500;


const Slider = () => {
    const {getSlides} = MainServices();

    const [slides, setSlides] = useState([]);
    const [offset, setOffset] = useState(1);
    const [transition, setTransition] = useState(TRANSITION_DURATION)


    useEffect(() => {
        getRequest()
    }, [])

    const getRequest = useCallback(() => {
        try {
            getSlides().then(onChangeSlides)
        } catch(e) {
            console.error(e)
        }
    })

    const onChangeSlides = (res) => {
        setSlides(res)
    }

    const changeSlide = (i) => {
        setTransition(TRANSITION_DURATION)
        setOffset(prevOffset => prevOffset + i)
    }

    useEffect(() => {
        if(offset === slides.length + 1) {
            setTimeout(() => {
                setTransition(0)    
                setOffset(1)
            }, TRANSITION_DURATION)
        }

        if(offset === 0) {
            setTimeout(() => {
                setTransition(0)
                setOffset(slides.length)
            }, TRANSITION_DURATION)
        }
    }, [slides, offset])

    useEffect(() => {
        const interval = setInterval(() => {
            changeSlide(1)
        }, 8000)

        return () => clearInterval(interval)
        
    }, [slides, offset])

    return(
        <section className='slider'>
            <button 
                className='arr arr-left'
                onClick={() => changeSlide(-1)}><img src={left} alt="Стрілка вліво"/></button>

            <div className='slides'
                 style={{
                    transform: `translateX(-${offset * 100}%)`,
                    transitionDuration: `${transition}ms`
                    }}>
                {slides.length > 1 && <Slide item={slides[slides.length - 1]} />}
                {slides.map(item => {
                    return(
                        <Slide item={item} key={item._id}/>
                    )
                })}
                {slides.length > 0 && <Slide item={slides[0]} />}
            </div>

            
            <button className='arr arr-right'
                    onClick={() => changeSlide(1)}><img src={right} alt="Стрілка вправо"/></button>
        </section>
    )
}

export default Slider;