import React from 'react';

import Direction from './Direction/Direction';
import Train from './Train/Train';
import Seats from './Seats/Seats';

// import arrowRight from './img/arrow-right.svg';
// import arrowLeft from './img/arrow-left.svg';

// import links from '../../../utils/constants/links';
// import directions from '../../../utils/constants/directions';

import styles from './TrainCard.module.scss';

function TrainCard(){

  return(
    <div className={styles.card}>
      <div className={styles.card__train}>
        <Train />
      </div>
      <div className={styles.card__direction}>
        <Direction />
      </div>
      <div className={styles.card__seats}>
        <Seats />
      </div>
    </div>
  )
};
export default TrainCard;