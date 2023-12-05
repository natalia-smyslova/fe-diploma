import React from 'react'
import { useSelector } from 'react-redux'

import SeatItem from './SeatItem/SeatItem';

import styles from './Seats.module.scss'

function Seats({
  direction,
  coachId,
  availableSeats,
  classType,
  prices,
  // adultSeats,
  // childrenSeats,
  coachName,
}) {
  const allSeats = useSelector(state => state.seats.selectedSeats)[direction];
  const selectedArr = allSeats?.filter(item => item?.coachId === coachId)[0]?.seats?.map(item => item?.seat)

  let totalSeats = 0;

  switch (classType) {
    case 'first':
      totalSeats = 18;
      break;
    case 'second':
      totalSeats = 36;
      break;
    case 'third':
      totalSeats = 54;
      break;
    default:
      totalSeats = 70;
  }

  const seatOptions = Array.from({ length: totalSeats }, (_, i) => i + 1);

  const seats = seatOptions.map(seat =>
    availableSeats?.includes(seat) ? [seat, 'vacant'] : [seat, 'taken']
  );

  const typeOfPassengerHandler = (seatNumber) => {
    const coef = allSeats
      ?.filter(item => item?.coachId === coachId)[0]
      ?.seats?.filter(item => item?.seat === seatNumber)[0]?.priceCoef

    let typeOfPassenger

    switch (coef) {
      case 1:
        typeOfPassenger = 'adults'
        break
      case 0.5:
        typeOfPassenger = 'children'
        break

      default:
        typeOfPassenger = 'none'
    }

    return typeOfPassenger
  }

  const fourthClassScheme = (
    <div className={styles.coach__fourthCl}>
      <div className={styles.top__fourthCl}>
        <div className={styles.topRow__fourthCl}>
          {seats?.map(
            seat =>
              seat[0] % 2 === 0 &&
              seat[0] <= 36 && (
                <SeatItem
                  // adultSeats={adultSeats}
                  // childrenSeats={childrenSeats}
                  key={coachId + seat[0]}
                  chosenSeat={!!selectedArr?.some(item => item === seat[0])}
                  number={seat[0]}
                  taken={seat[1] === 'taken'}
                  coachClass={classType}
                  direction={direction}
                  coachId={coachId}
                  coachName={coachName}
                  price={prices.bottom}
                  typeOfPassenger={typeOfPassengerHandler(seat[0])}
                />
              )
          )}
        </div>

        <div className={styles.bottomRow__fourthCl}>
          {seats.map(
            seat =>
              seat[0] % 2 === 1 &&
              seat[0] <= 36 && (
                <SeatItem
                  // adultSeats={adultSeats}
                  // childrenSeats={childrenSeats}
                  key={coachId + seat[0]}
                  chosenSeat={!!selectedArr?.some(item => item === seat[0])}
                  number={seat[0]}
                  taken={seat[1] === 'taken'}
                  coachClass={classType}
                  direction={direction}
                  coachId={coachId}
                  coachName={coachName}
                  price={prices.bottom}
                  // typeOfPassenger={typeOfPassengerDetector(seat[0])}
                />
              )
          )}
        </div>
      </div>

      <div className={styles.bottom__fourthCl}>
        <div className={styles.topRow__fourthCl}>
          {seats.map(
            seat =>
              seat[0] % 2 === 0 &&
              seat[0] > 36 &&
              seat[0] < 69 && (
                <SeatItem
                  // adultSeats={adultSeats}
                  // childrenSeats={childrenSeats}
                  key={coachId + seat[0]}
                  chosenSeat={!!selectedArr?.some(item => item === seat[0])}
                  number={seat[0]}
                  taken={seat[1] === 'taken'}
                  coachClass={classType}
                  direction={direction}
                  coachId={coachId}
                  coachName={coachName}
                  price={prices.bottom}
                  // typeOfPassenger={typeOfPassengerDetector(seat[0])}
                />
              )
          )}
        </div>

        <div className={styles.bottomRow__fourthCl}>
          {seats.map(
            seat =>
              ((seat[0] % 2 === 1 && seat[0] > 36) || seat[0] === 70) && (
                <SeatItem
                  // adultSeats={adultSeats}
                  // childrenSeats={childrenSeats}
                  key={coachId + seat[0]}
                  chosenSeat={!!selectedArr?.some(item => item === seat[0])}
                  number={seat[0]}
                  taken={seat[1] === 'taken'}
                  coachClass={classType}
                  direction={direction}
                  coachId={coachId}
                  coachName={coachName}
                  price={prices.bottom}
                  // typeOfPassenger={typeOfPassengerDetector(seat[0])}
                />
              )
          )}
        </div>
      </div>
    </div>
  )

  const otherClassesScheme = (
    <div className={styles.coach}>
      <div className={styles.top}>
        <div className={styles.topRow}>
          {classType === 'first' &&
            seats.map(seat => (
              <SeatItem
                // adultSeats={adultSeats}
                // childrenSeats={childrenSeats}
                key={coachId + seat[0]}
                chosenSeat={!!selectedArr?.some(item => item === seat[0])}
                number={seat[0]}
                taken={seat[1] === 'taken'}
                coachClass={classType}
                direction={direction}
                coachId={coachId}
                coachName={coachName}
                price={prices.bottom}
                // typeOfPassenger={typeOfPassengerDetector(seat[0])}
              />
            ))}
          {(classType === 'second' || classType === 'third') &&
            seats.map(
              seat =>
                seat[0] % 2 === 0 &&
                seat[0] <= 36 && (
                  <SeatItem
                    // adultSeats={adultSeats}
                    // childrenSeats={childrenSeats}
                    key={coachId + seat[0]}
                    chosenSeat={!!selectedArr?.some(item => item === seat[0])}
                    number={seat[0]}
                    taken={seat[1] === 'taken'}
                    coachClass={classType}
                    direction={direction}
                    coachId={coachId}
                    coachName={coachName}
                    price={prices.top}
                    // typeOfPassenger={typeOfPassengerDetector(seat[0])}
                  />
                )
            )}
        </div>

        {(classType === 'second' || classType === 'third') && (
          <div className={styles.bottomRow}>
            {seats.map(
              seat =>
                seat[0] % 2 === 1 &&
                seat[0] <= 36 && (
                  <SeatItem
                    // adultSeats={adultSeats}
                    // childrenSeats={childrenSeats}
                    key={coachId + seat[0]}
                    chosenSeat={!!selectedArr?.some(item => item === seat[0])}
                    number={seat[0]}
                    taken={seat[1] === 'taken'}
                    coachClass={classType}
                    direction={direction}
                    coachId={coachId}
                    coachName={coachName}
                    price={prices.bottom}
                    // typeOfPassenger={typeOfPassengerDetector(seat[0])}
                  />
                )
            )}
          </div>
        )}
      </div>

      <div className={styles.bottom}>
        {classType === 'third' &&
          seats.map(
            seat =>
              seat[0] > 36 && (
                <SeatItem
                  // adultSeats={adultSeats}
                  // childrenSeats={childrenSeats}
                  key={coachId + seat[0]}
                  chosenSeat={!!selectedArr?.some(item => item === seat[0])}
                  number={seat[0]}
                  taken={seat[1] === 'taken'}
                  coachClass={classType}
                  direction={direction}
                  coachId={coachId}
                  coachName={coachName}
                  price={prices.side}
                  // typeOfPassenger={typeOfPassengerDetector(seat[0])}
                />
              )
          )}
      </div>
    </div>
  )

  return (
    <section>
      {classType === 'fourth' ? fourthClassScheme : otherClassesScheme}
    </section>
  )
}

export default Seats;
