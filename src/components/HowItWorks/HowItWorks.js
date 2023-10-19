import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';

import styles from './HowItWorks.module.scss';

import Option from './Options/Option';
import options from './Options/options';

function HowItWorks(){
  const { pathname } = useLocation();
   return ( 
   <div className={styles.howItWorks}>
    <div className={styles.howItWorks__wrapper}>
       <div className={styles.howItWorks__title}>как это работает</div>
       <HashLink smooth to={`${pathname}/#contacts`}>
          <button className={styles.btn} type="button">
             Узнать больше
          </button>
       </HashLink>
    </div>
    <div className={styles.howItWorks__options}>
       {options.map((option) => (
          <Option key={option.id} img={option.img} text={option.text} />
       ))}
    </div>
 </div>
)
};
export default HowItWorks;