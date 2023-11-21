import React from 'react';

import PricesBlock from './PricesBlock/PricesBlock';
import ServicesBlock from './ServicesBlock/ServicesBlock';
import SeatsBlock from './SeatsBlock/SeatsBlock';

import styles from './CoachInfo.module.scss';

function CoachInfo() {
  return (
    <>
      {/* {availableSeats.length > 0 && ( */}
        <div>
          <div className={styles.top}>
            <div className={styles.coach__wrapper}>
              <div className={styles.coach__number}>
                12
                {/* {coach?.coach?.name} */}
              </div>
              <div className={styles.coach__name}>вагон</div>
            </div>
            <div className={styles.seats}>
              <div className={styles.seats__header}>
                <div className={styles.seats__text}>Места</div>
                <div className={styles.seats__total}>
                  13
                  {/* {availableSeats?.length} */}
                </div>
              </div>
              <SeatsBlock
                // coach={coach}
                // numOfTop={numOfTop}
                // numOfBottom={numOfBottom}
                // numOfSide={numOfSide}
                // numOfSeats={availableSeats?.length}
              />
            </div>
            <div className={styles.price}>
              <div className={styles.price__header}>Стоимость</div>
              <PricesBlock
                // coach={coach}
                // numOfTop={numOfTop}
                // numOfBottom={numOfBottom}
                // numOfSide={numOfSide}
              />
            </div>

            <div className={styles.service}>
              <div className={styles.service__header}>
                <div className={styles.service__text}>Обслуживание</div>
                <div className={styles.service__provider}>фпк</div>
              </div>

              <ServicesBlock
                // direction={direction}
                // coachName={coachName}
              />
            </div>
          </div>
          {/* {viewers} */}
          <div className={styles.bottom}>
            seats
            {/* <Seats
              adultSeats={adultSeats}
              childrenSeats={childrenSeats}
              direction={direction}
              coachId={coach?.coach?._id}
              availableSeats={availableSeats}
              classType={coach?.coach?.class_type}
              prices={prices}
              coachName={coachName}
            /> */}
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