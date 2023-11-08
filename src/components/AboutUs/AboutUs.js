import  React  from 'react';

import styles from './AboutUs.module.scss';

import aboutUsInfo from './AboutUsInfo';

function AboutUs() {
  return (
    <div className={styles.about} id="aboutUs">
      <div className={styles.about__title}>о нас</div>
      <div className={styles.about__text}>{aboutUsInfo}</div>
    </div>
  )
};

export default AboutUs;