import React from 'react';

import SexRadioGroup from './FormInputs/SexRadioGroup/SexRadioGroup';
import SpecialNeeds from './FormInputs/SpecialNeeds/SpeacialNeeds';
import FullName from './FormInputs/FullName/FullName';
// import BirthCertificate from './FormInputs/BirthCertificate/BirthCertificate';
import DocTypeSelect from './FormInputs/DocTypeSelect/DocTypeSelect';
import PassportSeria from './FormInputs/PassportInfo/PassportSeria/PassportSeria';
import PassportNumber from './FormInputs/PassportInfo/PassportNumber/PassportNumber';
import DateOfBirthPicker from './FormInputs/DateOfBirthPicker/DateOfBirthPicker';

// import { Link } from 'react-router-dom';

// import directions from '../../../utils/constants/directions';
// import links from '../../../utils/constants/links';
// import fieldParams from './FormInputs/fieldParams';

import minusRound from '../img/minus-round.svg';
import cross from '../img/cross.svg';
// import acceptIcon from '../img/accept.svg';
import errorIcon from '../img/error.svg';

// import plusRouns from '../img/plus-round.svg';

import styles from './PassengerCard.module.scss';

function PassengerCard() {

  // const buttonClassNames = `button button__transperant-light ${styles.btn}`;

  return (
    <div className={styles.passangerCard}>

      <div className={styles.header}>
        <div className={styles.left}>
          <img src={minusRound} alt="иконка - минус" />
          <span className={styles.header__text}>Пассажир</span>
        </div>
        <button type="button">
          <img src={cross} alt="иконка - крестик" />
        </button>
      </div>

      <form className={styles.card__form}>
        <div className={styles.section__first}>
          <div className={`${styles.row} ${styles.rowShort}`}>
            <FullName />
            <div className={styles.sex__group}>
              <SexRadioGroup />
              <DateOfBirthPicker />
            </div>

          </div>
          <div className={styles.special__needs}>
            <SpecialNeeds />
          </div>
        </div>
        <div className={styles.section__second}>
          <DocTypeSelect />
          <PassportSeria />
          <PassportNumber />
        </div>
      </form>
      <section className={styles.section__third}>
        <div className={styles.information}>
          <div>
            <img src={errorIcon} alt="иконка - галочка" className={styles.icon__submit}/>
          </div>
          <div className={styles.message__error}>СообщениеСообщение Сообщение Сообщение Сообщение Сообщение v v Сообщение Сообщение Сообщение Сообщение Сообщение </div>
        </div>
        {/* <button className={buttonClassNames} type="button"> Следующий пассажир</button> */}
      </section>
    </div>

  )
}

export default PassengerCard;