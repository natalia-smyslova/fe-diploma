import React from 'react';

import styles from './CoachType.module.scss';

function CoachType() {
  return (
    <div className={styles.coach}>
      <h4 className={styles.title}>Тип вагона</h4>
      {/* <div className={styles.coachTypes}>
        {coachTypes.map(
          (coach) =>
            coach?.available && (
              <CoachTypeItem
                key={coach?.id}
                coach={coach}
                direction={direction}
              />
            )
        )}
      </div> */}
    </div>
  );
};

export default CoachType;