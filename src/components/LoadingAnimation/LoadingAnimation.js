import React from 'react';
import loadingAnimation from './loading-animation.gif';

import styles from './LoadingAnimation.module.scss';

function LoadingAnimation() {

  return (
    <div className={styles.animation}>
      <p className={styles.text}>идет поиск</p>
      <img
        className={styles.image}
        src={loadingAnimation}
        alt="анимация загрузки"
      />
    </div>
  );
}

export default LoadingAnimation;