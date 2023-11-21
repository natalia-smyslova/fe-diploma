import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './OptionItem.module.scss';

import { changeOptions } from '../../../../store/slices/optionsSlice';

function OptionItem({ img, title, name, onChangeOption }) {

  const dispatch = useDispatch();
  const options = useSelector(state => state.options.options);

  const status = options[name];

  const changeOptionHandler = () => {
    dispatch(changeOptions({ name, value : !status }));
    onChangeOption();
  }

  return (
    <div className={styles.item}>
      <div className={styles.item__left}>
        <img
          className={styles.item__icon}
          src={img}
          alt={`Иконка - ${title}`}
        />
        <div className={styles.item__title}>{title}</div>
      </div>

      <div className={styles.container}> 
        <label className={styles.switch} htmlFor={name} > 
          <input type='checkbox' id={name} onChange={changeOptionHandler} defaultChecked={status} /> 
          <span className={styles['slider-round']} />
        </label> 
      </div>
    </div >
  )
};

export default OptionItem;