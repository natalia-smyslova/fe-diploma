import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Rate } from 'antd';
import { StarOutlined } from '@ant-design/icons';

import email from './img/email.svg';
import print from './img/print.svg';
import show from './img/show.svg';
import rub from './img/rub.svg';

import links from '../../utils/constants/links';

import styles from './OrderSuccess.module.scss';

function OrderSuccess() {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(links.main);
  };

  const buttonClassNames = `button button__colored ${styles.btn}`;

  return (
    <section className={styles.orderSuccess}>
      <div className={styles.congratulations}>Благодарим вас за заказ!</div>
      <article className={styles.afterOrder}>
        <div className={styles.orderData}>
          <div>№Заказа</div>
          <div>
            <span className={styles.priceWord}>сумма </span>
            {/* <span>{sum}</span> */}
            <img
              className={styles.currency}
              src={rub}
              alt="иконка - рубль"
            />
          </div>
        </div>
        <div className={styles.nextSteps}>
          <div className={styles.stepItem}>
            <img
              className={styles.stepIcon}
              src={email}
              alt="иконка - билет на экране компьютера"
            />
            <div className={styles.stepText}>
              билеты будут <br /> отправлены <br /> на ваш
              <span className={styles['stepText-bold']}> e-mail</span>
            </div>
          </div>
          <div className={styles.stepItem}>
            <img
              className={styles.stepIcon}
              src={print}
              alt="иконка - распечатанный билет"
            />
            <div className={styles.stepText}>
              <span className={styles['stepText-bold']}>
                распечатайте <br />
              </span>
              <span>
                и сохраняйте билеты <br /> до даты поездки
              </span>
            </div>
          </div>
          <div className={styles.stepItem}>
            <img
              className={styles.stepIcon}
              src={show}
              alt="иконка - контролер"
            />
            <div className={styles.stepText}>
              <span className={styles['stepText-bold']}>
                предьявите <br />
              </span>
              <span>
                распечатанные <br /> билеты при посадке
              </span>
            </div>
          </div>
        </div>
        <div className={styles.congratulationsMessage}>
          <div className={styles.top}>Имя пассажира,</div>
          <div className={styles.middle}>
            Ваш заказ успешно оформлен. <br />В ближайшее время с вами
            свяжется наш оператор для подтверждения.
          </div>
          <div className={styles.bottom}>
            Благодарим вас за оказанное доверие и желаем приятного
            путешествия!
          </div>
        </div>
        <div className={styles.review}>
          <div className={styles.left}>
            <div className={styles.reviewText}> Оценить сервис</div>
            <Rate
              character={<StarOutlined style={{ fontSize: '48px' }} />}
            />
          </div>
          <button
            type="button"
            className={buttonClassNames}
            onClick={clickHandler}
          >
            Вернуться на главную
          </button>
        </div>
      </article>
    </section>
  );
};

export default OrderSuccess;