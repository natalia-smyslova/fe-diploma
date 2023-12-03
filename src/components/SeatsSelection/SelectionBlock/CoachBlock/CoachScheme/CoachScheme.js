import React from 'react'

// import SchemeItem from './SchemeItem/SchemeItem';
import FourthClassScheme from './FourthClassScheme/FourthClassScheme';
import OtherClassesScheme from './OtherClassesScheme/OtherClassesScheme';

import classes from '../../../classes';
// import passegerTypes from '../../passangerTypes';

import styles from './CoachScheme.module.scss';

function CoachScheme({ classType, availableSeats }) {

  const fourthClassScheme = <FourthClassScheme />;
  const otherClassesScheme = <OtherClassesScheme coach={classType} available={availableSeats}/>

  return (
    <section className={styles.coach__scheme}>
      {classType === classes.fourth ? fourthClassScheme : otherClassesScheme}
    </section>
  );
};

export default CoachScheme;