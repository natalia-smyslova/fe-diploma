import React from 'react';

import SexRadioGroup from './FormInputs/SexRadioGroup/SexRadioGroup';
import SpecialNeeds from './FormInputs/SpecialNeeds/SpeacialNeeds';
import FullName from './FormInputs/FullName/FullName';
// import BirthCertificate from './FormInputs/BirthCertificate/BirthCertificate';
import DocTypeSelect from './FormInputs/DocTypeSelect/DocTypeSelect';
// import PassportSeria from './FormInputs/PassportInfo/PassportSeria/PassportSeria';
// import PassportNumber from './FormInputs/PassportInfo/PassportNumber/PassportNumber';
import DateOfBirthPicker from './FormInputs/DateOfBirthPicker/DateOfBirthPicker';

// import { Link } from 'react-router-dom';

// import directions from '../../../utils/constants/directions';
// import links from '../../../utils/constants/links';
// import fieldParams from './FormInputs/fieldParams';

import minusRound from '../img/minus-round.svg';
import cross from '../img/cross.svg';
// import plusRouns from '../img/plus-round.svg';

import styles from './PassengerCard.module.scss';

function PassengerCard() {

  // const [form] = Form.useForm();

  // const [expanded, setExpanded] = useState(true);
  // const clickOnHeaderHandler = () => {
  //   setExpanded(!expanded);
  // };
  // const buttonClosedCross = (
  //   <button
  //     type="button"
  //     onClick={clickOnHeaderHandler}
  //     className={styles.buttonClosedCross}
  //   >
  //     <img src={plusRound} alt="иконка - плюс" />
  //     <span className={styles.text}>Пассажир</span>
  //   </button>
  // );


  // const button = (
  //   <Form.Item className={bottomSectionStyles}>
  //     {!thisPassenger[0] && !disabledForwardBtn && (
  //       <Button
  //         type="primary"
  //         htmlType="submit"
  //         className="passengerCard__button"
  //         disabled={disabledForwardBtn}
  //       >
  //         Следующий пассажир
  //       </Button>
  //     )}
  //     {thisPassenger[0] && (
  //       <button type="submit" className={styles.changeButton}>
  //         Изменить
  //       </button>
  //     )}
  //   </Form.Item>
  // )

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
            </div>
            <DateOfBirthPicker />
          </div>
          <div className={styles.row}>
            <SpecialNeeds />
          </div>
        </div>
        <div className={styles.section__second}>
          <DocTypeSelect />
        </div>
      </form>
      <section className={styles.section__third}>section</section>
    </div>

  )
}

export default PassengerCard;