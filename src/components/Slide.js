

const Slide = ({item}) => {
    const {src, textColor, title, description, btns} = item;

    
    return(
        <div
             style={{background: `url(./assets/images/slides/${src}.jpg) center center/cover no-repeat`}}
             className='slide'>
            
            <div style={{color: `${textColor}`}}>
                <h2 className='slide__title'>{title}</h2>
                <h3 className='slide__descr'>{description}</h3>
            </div>

            <div className='slide__btns'>
                {btns.map((btn, i) => {
                    return(
                        <a href={btn.link} 
                            style={{backgroundColor: `${btn.color}`, color: `${btn.color === '#fff' ? '#000': '#fff'}`}}
                            className='slide__btn'
                            key={i}>

                            {btn.text}
                        </a>
                    )
                })}
            </div>
        </div>
    )
}

export default Slide