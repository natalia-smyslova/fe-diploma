import React from 'react';
// import { useNavigate } from 'react-router-dom';

import AllPassengersCard from './AllPassengersCard/AllPassengersCard';
import PaymentCard from './PaymentCard/PaymentCard';
import FinalTrainCard from './FinalTrainCard/FinalTrainCard';

import styles from './OrderConfirmation.module.scss';

function OrderConfirmation() {

  // const navigate = useNavigate();

  const buttonClassNames = `button button__transperant-light ${styles.btn}`;

  return (
    <div className={styles.wrapper}>
      <FinalTrainCard />
      <AllPassengersCard />
      <PaymentCard />
      <div >
        <button  className={buttonClassNames} type="submit">
          подтвердить
        </button>
      </div>
    </div>
  )
};

export default OrderConfirmation;