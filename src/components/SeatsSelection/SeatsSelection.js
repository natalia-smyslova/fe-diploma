import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import SelectionBlock from './SelectionBlock/SelectionBlock';

import links from '../../utils/constants/links';

import styles from './SeatsSelection.module.scss';

function SeatsSelection() {

  const navigate = useNavigate();

  const direction = useSelector(state => state.train.trains);

  const buttonClassNames = `button button-colored ${styles.btn}`;

  const clickHandler = () => {
    navigate(links.passengers);
  };

  return (
    <section className={styles.seats}>
      <h3 className={styles.seats__title}>выбор мест</h3>
      {direction.departure && <SelectionBlock direction='departure'/>}
      {direction.arrival && <SelectionBlock direction='arrival'/>}
      
      <div className={styles.wrapper}>
        <button type="button" className={buttonClassNames} onClick={clickHandler}>
          далее
        </button>
      </div>
    </section>
  )
};

export default SeatsSelection;