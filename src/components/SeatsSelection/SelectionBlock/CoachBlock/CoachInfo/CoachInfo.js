import React from 'react';

import styles from './CoachInfo.module.scss';

function CoachInfo() {
  return (
    <>
      {/* {availableSeats.length > 0 && ( */}
        <div className={className}>
          <div className={styles.top}>
            <div className={styles.coachNumber}>
              <span className={styles.coachNumber__name}>
                Название вагона
                {/* {coach?.coach?.name} */}
              </span>
              <span className={styles.coachNumber__coach}>вагон</span>
            </div>
            <div className={styles.seats}>
              <div className={styles.header}>
                <span>места</span>
                <span className={styles.seatsTotal}>
                  Доступные места
                  {/* {availableSeats?.length} */}
                </span>
              </div>
              <SeatsTable
                coach={coach}
                numOfTop={numOfTop}
                numOfBottom={numOfBottom}
                numOfSide={numOfSide}
                numOfSeats={availableSeats?.length}
              />
            </div>
            <div className={styles.price}>
              <div className={styles.header}>стоимость</div>
              <PricesTable
                coach={coach}
                numOfTop={numOfTop}
                numOfBottom={numOfBottom}
                numOfSide={numOfSide}
              />
            </div>

            <div className={styles.service}>
              <div className={styles.header}>
                <span>обслуживание</span>
                <span className={styles.serviceProvider}>фпк</span>
              </div>

              <CoachServices
                direction={direction}
                coachName={coachName}
              />
            </div>
          </div>
          {viewers}
          <div className={styles.bottom}>
            <Seats
              adultSeats={adultSeats}
              childrenSeats={childrenSeats}
              direction={direction}
              coachId={coach?.coach?._id}
              availableSeats={availableSeats}
              classType={coach?.coach?.class_type}
              prices={prices}
              coachName={coachName}
            />
          </div>
        </div>
      {/* )} */}
      {/* {availableSeats.length <= 0 && ( */}
        <div className={styles.lastBookedText}>
          Кто-то только что забронировал последнее место в этом вагоне
        </div>
      {/* )} */}
    </>
  );
};

export default CoachInfo;