import React  from 'react';

import AboutUs from '../../AboutUs/AboutUs';
import style from './MainPageBody.module.scss';
import HowItWorks from '../../HowItWorks/HowItWorks';
import Reviews from '../../Reviews/Reviews';

function MainPageBody() {
  return (
    <div className={style.wrapper}>
      <AboutUs />
      <HowItWorks />
      <Reviews />
    </div>
  )
};
export default MainPageBody;