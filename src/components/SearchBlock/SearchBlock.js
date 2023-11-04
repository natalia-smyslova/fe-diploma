import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { swapCityValues } from '../../store/slices/searchSlice';

import Calendar from './Calendar/Calendar';
import SelectItem from './Select/Select';
import update from './icons/update.svg';

import styles from './SearchBlock.module.scss';

import links from '../../utils/constants/links';

function SearchBlock() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const buttonClassNames = `button button-colored ${styles.btn}`;

  function swapDirectionHandler() {
    dispatch(swapCityValues());
  }

  function submitHandler(event) {
    event.preventDefault();
    navigate(links.trains);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={styles['form-container']}>
        <h3 className={styles.header}>Направление</h3>
        <div className={styles['destination-container']}>
          <SelectItem placeholder='Откуда' name='departureCity' />
          <button onClick={swapDirectionHandler} type='button'>
            <img
              src={update}
              alt='update'
              height='24px'
              width='24px'
              className={styles.image}
            />
          </button>

          <SelectItem placeholder='Куда' name='arrivalCity' />
        </div>

        <h3 className={styles.header}>Дата</h3>
        <div className={styles['date-container']}>
          <Calendar placeholder='ДД/ММ/ГГ' name='departureDate' />
          <Calendar placeholder='ДД/ММ/ГГ' name='arrivalDate' />
        </div>

        <button className={buttonClassNames} type="submit">Найти билеты</button>
      </div>
    </form>
  )
};
export default SearchBlock;