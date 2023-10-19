import  React  from 'react';

import styles from './AboutUsInfo.module.scss';

const aboutUsInfo = (
  <>
    <p className={styles.about__text}>
      Мы рады видеть вас! Мы работаем для вас c 2003 года. 19 лет мы
      наблюдаем, как c каждым днем все больше людей заказывают жд билеты
      через интернет.
    </p>
    <p className={styles.about__text}>
      Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика,
      но стоит ли это делать?
      Мы расскажем o преимуществах заказа через интернет.
      </p>
    <p className={styles['about__text-bold']}>
      Покупать жд билеты дешево можно за 90 суток до отправления поезда.
      Благодаря динамическому ценообразованию цена на билеты в это время
      самая низкая.
    </p>
  </>
);

export default aboutUsInfo;