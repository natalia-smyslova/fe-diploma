import React from 'react';
import styled from "styled-components";
import { Carousel } from 'antd';

import Review from '../Reviews/Review';
import userReviews from '../Reviews/users/userReviews';

import styles from './CarouselSlider.module.scss';

function CarouselSlider() {

  // const onChange = (currentSlide) => {
  //   console.log(currentSlide);
  // };

  const CarouselWrapper = styled(Carousel)`
  > slick-track>*{
    display: flex;
    flex-wrap: nowrap;
  }
  > .slick-dots-bottom li button {
    width: 19px;
    height: 19px;
    border-radius: 100%;
    background: #E5E5E5;
  }
  > .slick-dots li.slick-active button {
    width: 19px;
    height: 19px;
    border-radius: 100%;
    background: #c4c4c4;
  }
`;

  return (
    <CarouselWrapper>
      <div>
        <div className={styles.cards}>
          <Review
            key={userReviews[0].id}
            img={userReviews[0].img}
            name={userReviews[0].name}
            head={userReviews[0].head}
            text={userReviews[0].text} />
          <Review
            key={userReviews[1].id}
            img={userReviews[1].img}
            name={userReviews[1].name}
            head={userReviews[1].head}
            text={userReviews[1].text} />
        </div>
      </div>
      <div>
        <div className={styles.cards}>
        <Review
            key={userReviews[2].id}
            img={userReviews[2].img}
            name={userReviews[2].name}
            head={userReviews[2].head}
            text={userReviews[2].text} />
          <Review
            key={userReviews[3].id}
            img={userReviews[3].img}
            name={userReviews[3].name}
            head={userReviews[3].head}
            text={userReviews[3].text} />
        </div>
      </div>
      <div>
        <div className={styles.cards}>
        <Review
            key={userReviews[4].id}
            img={userReviews[4].img}
            name={userReviews[4].name}
            head={userReviews[4].head}
            text={userReviews[4].text} />
          <Review
            key={userReviews[5].id}
            img={userReviews[5].img}
            name={userReviews[5].name}
            head={userReviews[5].head}
            text={userReviews[5].text} />
        </div>
      </div>
      <div>
        <div className={styles.cards}>
        <Review
            key={userReviews[6].id}
            img={userReviews[6].img}
            name={userReviews[6].name}
            head={userReviews[6].head}
            text={userReviews[6].text} />
          <Review
            key={userReviews[7].id}
            img={userReviews[7].img}
            name={userReviews[7].name}
            head={userReviews[7].head}
            text={userReviews[7].text} />
        </div>
      </div>
      <div>
        <div className={styles.cards}>
        <Review
            key={userReviews[8].id}
            img={userReviews[8].img}
            name={userReviews[8].name}
            head={userReviews[8].head}
            text={userReviews[8].text} />
          <Review
            key={userReviews[9].id}
            img={userReviews[9].img}
            name={userReviews[9].name}
            head={userReviews[9].head}
            text={userReviews[9].text} />
        </div>
      </div>
    </CarouselWrapper>
  );
};


export default CarouselSlider;