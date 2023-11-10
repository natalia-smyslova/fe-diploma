import React from 'react';
import { useNavigate } from 'react-router-dom';

import PassengerCard from "./PassengerCard/PassengerCard";

import links from '../../utils/constants/links';

import styles from './PassangersSelection.module.scss';

function PassangersSelection() {
  const navigate = useNavigate();

  const buttonClassNames = `button button-colored ${styles.btn}`;
  const clickHandler = () => {
    navigate(links.payment);
  };

  return (
    <div className={styles.wrapper}>
      {/* {passArray.map((item, index) => ( */}
      <PassengerCard
      // key={item.id}
      // passengerType={
      //   unchosenAdultSeats.length >= 1
      //     ? passengerTypes.adults
      //     : passengerTypes.children
      // }
      // id={item.id}
      // pasNumber={index + 1}
      // clickOnRemovePassHandler={clickOnRemovePassHandler}
      // clickOnNextPassHandler={clickOnNextPassHandler}
      // unchosenSeats={unchosenSeats}
      // unchosenSeatsDep={unchosenSeatsDep}
      // unchosenSeatsArr={unchosenSeatsArr}
      />
      {/* ))} */}
      {/* {unchosenSeats.length > 0 && addPassenger} */}
      {/* {(seatsDep.length > 0 || seatsArr.length > 0) && button} */}
      <div className={styles.buttonWrapper}>
        <button className={buttonClassNames} onClick={clickHandler} type="button" >
          {/* // disabled={unchosenSeats.length > 0} */}
          далее
        </button>
      </div>
    </div>
  );
};

export default PassangersSelection;