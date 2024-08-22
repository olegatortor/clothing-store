import { Form, Formik, Field, ErrorMessage  } from 'formik';
import * as Yup from 'yup';

import '../assets/scss/footer.scss';

import instagram from '../assets/icons/instagram.svg'
import facebook from '../assets/icons/facebook.svg'
import youtube from '../assets/icons/youtube.svg'

const Footer = () => {
   

    return (
        <footer className='footer'>
            <div className='footer__wrapper'>
                <h3>Отримуй першим свіжообсмажені новини</h3>
                <div className='footer__div'>
                    <span>Ми в соцмережах</span>
                    <ul className='footer__icons'>
                        <li><a><img src={instagram} alt="instagram"/></a></li>
                        <li><a><img src={facebook} alt="facebook"/></a></li>
                        <li><a><img src={youtube} alt="youtube"/></a></li>
                    </ul>
                </div>
            </div>
            
            <div className='footer__wrapper'>
                <h3>Розділи</h3>
                <ul className='footer__navList'>
                    <li><a>Головна</a></li>
                    <li><a>Асортимент</a></li>
                    <li><a>Новини</a></li>
                    <li><a>Контакти</a></li>
                </ul>
            </div>

            <div className='footer__form'>
                <h3>Потрібна консультація? Введи свій номер телефону та протягом години тобі передзвонить менеджер магазину:</h3>
                <div className='footer__block'>
                    <Formik
                        initialValues={{ name: '', phone: '' }}

                        validationSchema={Yup.object().shape({
                            name: Yup.string()
                            .min(2, 'Too Short!')
                            .max(20, 'Too Long!')
                            .required('Required'),
                            phone: Yup.string()
                            .matches(/^(\+?38)?0\d{9}$/, 'Невірний формат номера телефону')
                            .required('Required')
                        })}

                        onSubmit={value => {
                            console.log('finish', value)
                        }}
                    >
                        <Form>
                            <Field  type='text' name="name" placeholder="Ім’я та прізвище"/>
                            <ErrorMessage name='name' component="div"/>

                            <Field  type='tel' name="phone" placeholder="Номер телефону"/>
                            <ErrorMessage name='phone' component="div"/>

                            <button type='submit'>ПЕРЕДЗВОНІТЬ МЕНІ</button>
                        </Form>
                    </Formik>
                    <div className='footer__text'>Натискаючи на кнопку, ви погоджуєтеся на обробку персональних даних і погоджуєтесь з політикою конфіденційності. Посилання на договір публічної оферти https://domen.com/public_offer </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
