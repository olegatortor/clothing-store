import { useEffect, useState } from 'react';
import '../assets/scss/faq.scss';
import { MainServices } from '../assets/services/MainServices';

import plus from '../assets/icons/plus.svg'

const Faq = () => {
    const { getAllFaq } = MainServices();
    const [faqs, setFaqs] = useState([]);
    const [visibleElements, setVisibleElements] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getAllFaq();
                setFaqs(response);
            } catch (e) {
                console.error(e);
            }
        };

        fetchData();
    }, [getAllFaq]);

    const toggleVisibility = (id) => {
        setVisibleElements(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    return (
        <section className='faq__section'>
            <h2 className='faq__title'>Часті запитання (FAQ)</h2>

            <div className='faq__wrapper'>
                {faqs.map(item => {
                    const isVisible = visibleElements[item._id] || false;

                    return (
                        <div className={`faq__item ${isVisible ? 'show' : ''}`} key={item._id}>
                            <div className={'faq__subitem'} onClick={() => toggleVisibility(item._id)}>
                                <h3>{item.title}</h3>
                                <img src={plus}/>
                            </div>
                            <div className="faq__content">
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Faq;
