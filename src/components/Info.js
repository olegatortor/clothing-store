import '../assets/scss/info.scss';

const Info = (props) => {
    return(
        <section className={`info__wrapper  ${props.long}`}>
            <div className='info__text'>
                {props.children}
            </div>
            <div className='info__img'>
                {props.right}
            </div>
        </section>
    )
}

export default Info;