import React from 'react';
import CarouselSlider from './Slider/CarouselSlider';
// import Review from './Reviews/Review';
// import userReviews from './Reviews/users/userReviews';


import styles from './Reviews.module.scss';


function Reviews() {
   return (
      <div className={styles.reviews} id="reviews">
         <span className={styles.reviews__title}>отзывы</span>
         {/* <div className={styles.reviews__cards}>
            {userReviews.map((review) => (
               <Review
                  key={review.id}
                  img={review.img}
                  name={review.name}
                  head={review.head}
                  text={review.text}
               />
            ))}
         </div> */}
         <CarouselSlider />
      </div>
   );
}

export default Reviews;