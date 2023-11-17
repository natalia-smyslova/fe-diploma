import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './AmountFilter.module.scss';

import { changeLimit } from '../../../../store/slices/sortSlice';

function AmountFilter({ numberOfItem, totalCount, onChangeFilter }) {
  const dispatch = useDispatch();
  const limit = useSelector(state => state.sort.limit);

  const [buttonActive, setButtonActive] = useState(false);

  const buttonActiveClassName = styles['button-active'];
  const buttonInactiveClassName = styles.button;

  const buttonClassName = buttonActive ? buttonActiveClassName : buttonInactiveClassName;

  const clickHandler = () => {
    dispatch(changeLimit(numberOfItem));
    onChangeFilter();
  }

  useEffect(() => {
    // eslint-disable-next-line
    limit === numberOfItem ? setButtonActive(true) : setButtonActive(false)
    }, [limit, totalCount, numberOfItem]
  );

  return (
    <div>
      {(totalCount >= numberOfItem - 5) && (
        <button type='button' className={buttonClassName} onClick={clickHandler}>{numberOfItem}</button>
      )}
    </div>
  );
};

export default AmountFilter;