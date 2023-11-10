import React from 'react';
// import { Link } from 'react-router-dom';

// import directions from '../../../utils/constants/directions';
// import links from '../../../utils/constants/links';

// import minusRound from '../img/minus-round.svg';
// import cross from '../img/cross.svg';
// import plusRouns from '../img/plus-round.svg';



import styles from './PassengerCard.module.scss';

function PassengerCard() {
  return (
    <div className={styles.card}>
      <div className={styles.card__passenger}>
        пассажиры
      </div>
      <form className={styles.card__form}>
        <div className={styles.section}>section</div>
        <div className={styles.section}>section</div>
      </form>
    </div>

  )
}

export default PassengerCard;