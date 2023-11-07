import React from 'react';
import CarouselSlider from './Slider/CarouselSlider';


import styles from './Reviews.module.scss';


function Reviews() {
   return (
      <div className={styles.reviews} id="reviews">
         <span className={styles.reviews__title}>отзывы</span>
         <CarouselSlider />
      </div>
   );
}

export default Reviews;