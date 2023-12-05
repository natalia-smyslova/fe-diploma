import React from 'react';
import { useSelector } from 'react-redux';

import PricesBlock from './PricesBlock/PricesBlock';
import ServicesBlock from './ServicesBlock/ServicesBlock';
import SeatsBlock from './SeatsBlock/SeatsBlock';
import Seats from './Seats/Seats';

import styles from './CoachInfo.module.scss';

function CoachInfo({ direction, coachName, className }) {
  const coach = useSelector(state => state.seats.seatsOptions)[direction]?.filter(item => item?.coach?.name === coachName)[0];
  const availableSeats = coach?.seats.map(item => item.available ? item.index : null).filter(item => item !== null);

  let prices;

  switch (coach?.coach.class_type) {
    case 'first':
      prices = { bottom: coach?.coach?.price };
      break;
    case 'second':
      prices = {
        top: coach?.coach.top_price,
        bottom: coach?.coach.bottom_price
      };
      break;
    case 'third':
      prices = {
        top: coach?.coach.top_price,
        bottom: coach?.coach.bottom_price,
        side: coach?.coach.side_price
      };
      break;
    default:
      prices = { bottom: coach?.coach.bottom_price };
  }

  const numberOfSideSeats = availableSeats?.filter(item => item > 36).length;
  const numberOfTopSeats = availableSeats?.filter(item => item <= 36 && item % 2 === 0).length;
  const numberOfBottomSeats = availableSeats?.filter(item => item <= 36 && item % 2 === 1).length;

  return (
    <>
      {availableSeats?.length > 0 && (
        <div className={className}>
          <div className={styles.top}>
            <div className={styles.coach__wrapper}>
              <div className={styles.coach__number}>
                {coach.coach.name}
              </div>
              <div className={styles.coach__name}>вагон</div>
            </div>
            <div className={styles.seats}>
              <div className={styles.seats__header}>
                <div className={styles.seats__text}>Места</div>
                <div className={styles.seats__total}>
                  {availableSeats?.length}
                </div>
              </div>
              <SeatsBlock
                coach={coach}
                numberOfSideSeats={numberOfSideSeats}
                numberOfTopSeats={numberOfTopSeats}
                numberOfBottomSeats={numberOfBottomSeats}
                numberOfAllSeats={availableSeats?.length}
              />
            </div>
            <div className={styles.price}>
              <div className={styles.price__header}>Стоимость</div>
              <PricesBlock
                coach={coach}
                numberOfSideSeats={numberOfSideSeats}
                numberOfTopSeats={numberOfTopSeats}
                numberOfBottomSeats={numberOfBottomSeats}
              />
            </div>

            <div className={styles.service}>
              <div className={styles.service__header}>
                <div className={styles.service__text}>Обслуживание</div>
                <div className={styles.service__provider}>фпк</div>
              </div>

              <ServicesBlock
                direction={direction}
                coachName={coachName}
              />
            </div>
          </div>
          <div className={styles.bottom}>
            <Seats
              // adultSeats={adultSeats}
              // childrenSeats={childrenSeats}
              direction={direction}
              coachId={coach?.coach?._id}
              availableSeats={availableSeats}
              classType={coach?.coach?.class_type}
              prices={prices}
              coachName={coachName}
            />
          </div>
        </div>
      )} 
      {availableSeats?.length <= 0 && (
        <div className={styles['last-text']}>
          Кто-то только что забронировал последнее место в этом вагоне
        </div>
      )}
    </>
  );
};

export default CoachInfo;