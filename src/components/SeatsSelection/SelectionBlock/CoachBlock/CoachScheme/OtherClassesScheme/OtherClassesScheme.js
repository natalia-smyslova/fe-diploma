import React from 'react';

import SchemeItem from '../SchemeItem/SchemeItem';

import classes from '../../../../classes';

import styles from './OtherClassesScheme.module.scss';

function OtherClassesScheme({
  availableSeats,
  classType,
  // direction,
  // coachId,
  // prices,
  // adultSeats,
  // childrenSeats,
  // coachName,
}) {


  let totalSeats;

  switch (classType) {
    case classes.first:
      totalSeats = 18;
      break;
    case classes.second:
      totalSeats = 36;
      break;
    case classes.third:
      totalSeats = 54;
      break;

    default:
      totalSeats = 70;
  }

  const seatOptions = Array.from({ length: totalSeats }, (_, i) => i + 1);

  const seats = seatOptions.map((seat) =>
    availableSeats?.includes(seat) ? [seat, 'vacant'] : [seat, 'taken']
  );


  return (
    <div className={styles.coach} >
      <div className={styles.top}>
        <div className={styles.topRow}>
          {classType === classes.first &&
            seats.map((seat) => (
              <SchemeItem
                // adultSeats={adultSeats}
                // childrenSeats={childrenSeats}
                // key={coachId + seat[0]}
                // chosenSeat={!!selectedArr?.some((el) => el === seat[0])}
                number={seat[0]}
                // taken={seat[1] === 'taken'}
                // coachClass={classType}
                // direction={direction}
                // coachId={coachId}
                // coachName={coachName}
                // price={prices.bottom}
                // typeOfPassenger={typeOfPassengerDetector(seat[0])}
              />
            ))}
          {(classType === classes.second || classType === classes.third) &&
            seats.map(
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
                    // price={prices.top}
                    // typeOfPassenger={typeOfPassengerDetector(seat[0])}
                  />
                )
            )}
        </div>

        {(classType === classes.second || classType === classes.third) && (
          <div className={styles.bottomRow}>
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
        )}
      </div>

      <div className={styles.bottom}>
        {classType === classes.third &&
          seats.map(
            (seat) =>
              seat[0] > 36 && (
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
                  // price={prices.side}
                  // typeOfPassenger={typeOfPassengerDetector(seat[0])}
                />
              )
          )}
      </div>
    </div>
  )
};

export default OtherClassesScheme;