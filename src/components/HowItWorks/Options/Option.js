import React from 'react';

import styles from './Option.module.scss';

function Option({ img, alt, text }) {
  return (
     <div className={styles.option}>
        <div className={styles.option__iconContainer}>
           <img className={styles.option__icon} src={img} alt={alt} />
        </div>
        <div className={styles.option__text}>{text}</div>
     </div>
  );
}

export default Option;