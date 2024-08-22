import Header from './components/Header';
import Slider from './components/Slider';
import Info from './components/Info';
import ItemGender from './components/ItemGender';
import Faq from './components/Faq';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Info right= {<img src="./assets/images/info1.jpg" alt='Інфо'/>}>
        <h2 className='info__title'>Що ми пропонуємо?</h2>
        <ol className='info__list'>
            <li>Широкий вибір: Від casual до вечірнього вбрання, від спортивного стилю до офісного, у нас ви знайдете все, що потрібно для створення ідеального гардеробу.</li>
            <li>Висока якість: Ми працюємо тільки з перевіреними постачальниками та виробниками, щоб забезпечити високу якість кожного товару.</li>
            <li>Доступні ціни: Ми пропонуємо конкурентні ціни на всі товари, а також регулярні знижки та акції.</li>
            <li>Відмінний сервіс: Наша команда підтримки завжди готова допомогти вам з будь-якими питаннями та забезпечити швидку доставку ваших замовлень.</li>
        </ol>
      </Info>

      <section className='gender'>
        <ItemGender color="#A8A8AA" src="man"/>
        <ItemGender color="#50567A" src="woman"/>
      </section>

      
      <Info right= {<img src="./assets/images/info2.jpg" alt='Інфо2'/>}
            long={'long'}>
        <h2 className='info__title'>Чому обирають нас:</h2>
        <ol className='info__list'>
            <li>Персоналізований підхід: Завдяки нашій програмі лояльності та персоналізованим рекомендаціям, ми допомагаємо знайти саме те, що вам потрібно.</li>
            <li>Простота і зручність: Зробіть покупки легко і швидко завдяки нашому зручному онлайн-магазину та швидкій доставці.</li>
            <li>Впевненість у якості: Ми пропонуємо тільки сертифіковані та перевірені товари, щоб ви могли бути впевнені у кожній покупці.</li>
        </ol>
      </Info>

      <Faq/>

      <Footer/>
    </div>
  );
}

export default App;
