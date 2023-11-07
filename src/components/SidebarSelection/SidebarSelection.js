import React, { useState } from 'react';

// import Calendar from '../SearchBlock/Calendar/Calendar';
import Options from './Options/Options';
// import Direction from './Direction/Direction';
import PriceSlider from './PriceSlider/PriceSlider';

import arrowBack from './img/back.svg';
import minus from './img/minus.svg';
import plus from './img/plus.svg';
import arrowTo from './img/to.svg';

import styles from './SidebarSelection.module.scss';
import Calendar from '../SearchBlock/Calendar/Calendar';

function SidebarSelection() {

  const [buttonTo, setButtonTo] = useState(plus);
  const [buttonBack, setButtonBack] = useState(plus);

  const buttonToHandler = () => {
    if (buttonTo === plus) {
      setButtonTo(minus);
    }
    else {
      setButtonTo(plus)
    }
  };

  const buttonBackHandler = () => {

    if (buttonBack === plus) {
      setButtonBack(minus);
    }
    else {
      setButtonBack(plus)
    }
  };


  return (
    <section className={styles.wrapper}>
      <div className={styles.module}>
        <h4 className={styles.module__title}>Дата поездки</h4>
        <Calendar placeholder='ДД/ММ/ГГ' name='departureDate' />
        <h4 className={styles.module__title}>Дата возвращения</h4>
        <Calendar placeholder='ДД/ММ/ГГ' name='arrivalDate' />
      </div>
      <div className={styles.module}>
        <Options />
      </div>
      <div className={styles.module}>
        <h4 className={styles.module__title}>Стоимость</h4>
        <PriceSlider />
      </div>
      <div className={styles.module__direction}>
        <div className={styles.module__wrapper}>
          <img
            className={styles.module__icon}
            src={arrowTo}
            alt="Туда"
          />
          <h4 className={styles.module__vector}>Туда</h4>
        </div>
        <button type='button' className='button__to' onClick={buttonToHandler}>
          <img
            className={styles.button__icon}
            src={buttonTo}
            alt="Развернуть"
          />
        </button>
        {/* <div className={styles.info}>
          <Direction className={styles.info} />
        </div> */}
      </div>
      <div className={styles.module__direction}>
        <div className={styles.module__wrapper}>
          <img
            className={styles.module__icon}
            src={arrowBack}
            alt="Обратно"
          />
          <h4 className={styles.module__vector}>Обратно</h4>
          {/* <Direction /> */}
        </div>
        <button type='button' className='button__back' onClick={buttonBackHandler}>
          <img
            className={styles.button__icon}
            src={buttonBack}
            alt="Разернуть"
          />
        </button>
      </div>
    </section>
  )
};

export default SidebarSelection;