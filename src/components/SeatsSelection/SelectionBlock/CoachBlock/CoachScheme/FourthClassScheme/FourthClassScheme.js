import React from 'react';

import SchemeItem from '../SchemeItem/SchemeItem';

import styles from './FourthClassScheme.module.scss';

function FourthClassScheme({
  availableSeats
}) {

  // На макете 62?
  const totalSeats = 70;

  const seatOptions = Array.from({ length: totalSeats }, (_, i) => i + 1);

  const seats = seatOptions.map((seat) =>
    availableSeats?.includes(seat) ? [seat, 'vacant'] : [seat, 'taken']
  );

  return (
  <div className={styles.coach__fourthCl}>
    <div className={styles.top__fourthCl}>
      <div className={styles.topRow__fourthCl}>
        {seats.map(
          (seat) =>
            seat[0] % 2 === 0 &&
            seat[0] <= 36 && (
              <SchemeItem
                // adultSeats={adultSeats}
                // childrenSeats={childrenSeats}
                // key={coachId + seat[0]}
                // chosenSeat={
                //   !!selectedArr?.some((el) => el === seat[0])
                // }
                // number={seat[0]}
                // taken={seat[1] === 'taken'}
                // coachClass={classType}
                // direction={direction}
                // coachId={coachId}
                // coachName={coachName}
                // price={prices.bottom}
                // typeOfPassenger={typeOfPassengerDetector(seat[0])}
              />
            )
        )}
      </div>

      <div className={styles.bottomRow__fourthCl}>
        {seats.map(
          (seat) =>
            seat[0] % 2 === 1 &&
            seat[0] <= 36 && (
              <SchemeItem
                // adultSeats={adultSeats}
                // childrenSeats={childrenSeats}
                // key={coachId + seat[0]}
                // chosenSeat={
                //   !!selectedArr?.some((el) => el === seat[0])
                // }
                // number={seat[0]}
                // taken={seat[1] === 'taken'}
                // coachClass={classType}
                // direction={direction}
                // coachId={coachId}
                // coachName={coachName}
                // price={prices.bottom}
                // typeOfPassenger={typeOfPassengerDetector(seat[0])}
              />
            )
        )}
      </div>
    </div>

    <div className={styles.bottom__fourthCl}>
      <div className={styles.topRow__fourthCl}>
        {seats.map(
          (seat) =>
            seat[0] % 2 === 0 &&
            seat[0] > 36 &&
            seat[0] < 69 && (
              <SchemeItem
                // adultSeats={adultSeats}
                // childrenSeats={childrenSeats}
                // key={coachId + seat[0]}
                // chosenSeat={
                //   !!selectedArr?.some((el) => el === seat[0])
                // }
                // number={seat[0]}
                // taken={seat[1] === 'taken'}
                // coachClass={classType}
                // direction={direction}
                // coachId={coachId}
                // coachName={coachName}
                // price={prices.bottom}
                // typeOfPassenger={typeOfPassengerDetector(seat[0])}
              />
            )
        )}
      </div>

      <div className={styles.bottomRow__fourthCl}>
        {seats.map(
          (seat) =>
            ((seat[0] % 2 === 1 && seat[0] > 36) ||
              seat[0] === 70) && (
              <SchemeItem
                // adultSeats={adultSeats}
                // childrenSeats={childrenSeats}
                // key={coachId + seat[0]}
                // chosenSeat={
                //   !!selectedArr?.some((el) => el === seat[0])
                // }
                // number={seat[0]}
                // taken={seat[1] === 'taken'}
                // coachClass={classType}
                // direction={direction}
                // coachId={coachId}
                // coachName={coachName}
                // price={prices.bottom}
                // typeOfPassenger={typeOfPassengerDetector(seat[0])}
              />
            )
        )}
      </div>
    </div>
  </div>
  )
};

export default FourthClassScheme;

