import React from 'react';
import { useNavigate } from 'react-router-dom';

import links from '../../../../utils/constants/links';
import SeatsItem from './SeatsItem/SeatsItem';

import conditionerIcon from './img/conditioner.svg';
import wifiIcon from './img/wifi.svg';
import expressIcon from './img/express.svg';

import styles from './Seats.module.scss';

function Seats({ availableSeats, priceInfoDeparture, priceInfoArrival, wifi, airConditioning, isExpress, button }) {
  const navigate = useNavigate();

  function clickHandlerChange() {
    navigate(links.seats);
  }

  function clickHandlerChoose() {
    navigate(links.seats);
  }

  const wifiImg = (
    <div className={styles.icons__content}>
      <img src={wifiIcon} alt="иконкa wifi" />
    </div>
  );
  const conditionerImg = (
    <div className={styles.icons__content}>
      <img src={conditionerIcon} alt="иконкa кондиционер" />
    </div>
  );
  const expressImg = (
    <div className={styles.icons__content}>
      <img src={expressIcon} alt="иконкa экспресс" />
    </div>
  );

  const buttonClassNamesChoose = `button button-colored ${styles.btn}`;
  const buttonClassNamesChange = `button button__transperant-light ${styles.btn}`;

  return (
    <div className={styles.seats}>
      <div>
        {availableSeats?.fourth && (
          <SeatsItem type="Сидячий" seatNumber={availableSeats.fourth} priceInfoDeparture={priceInfoDeparture?.fourth} priceInfoArrival={priceInfoArrival?.fourth} />
        )}

        {availableSeats?.third && (
          <SeatsItem type="Плацкарт" seatNumber={availableSeats.third} priceInfoDeparture={priceInfoDeparture?.third} priceInfoArrival={priceInfoArrival?.third} />
        )}

        {availableSeats?.second && (
          <SeatsItem type="Купе" seatNumber={availableSeats.second} priceInfoDeparture={priceInfoDeparture?.second} priceInfoArrival={priceInfoArrival?.second} />
        )}

        {availableSeats?.first && (
          <SeatsItem type="Люкс" seatNumber={availableSeats.first} priceInfoDeparture={priceInfoDeparture?.first} priceInfoArrival={priceInfoArrival?.first} />
        )}
      </div>
      <div className={styles.icons}>
        {wifi && wifiImg}
        {airConditioning && conditionerImg}
        {isExpress && expressImg}
      </div>
      <div>
          {button === 'chooseButton' ? (
            <button onClick={clickHandlerChoose} type="button" className={buttonClassNamesChoose}>
              Выбрать места
            </button>
          ) : (
            <button onClick={clickHandlerChange} type="button" className={buttonClassNamesChange}>
              Изменить
            </button>
          )}
      </div>
    </div>
  )
};
export default Seats;