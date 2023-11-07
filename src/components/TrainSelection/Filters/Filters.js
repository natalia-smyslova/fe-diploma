import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';

import AmountFilter from './AmountFilter/AmounFilter';
import SelectionFilter from './SelectionFilter/SelectionFilter';

import styles from './Filters.module.scss';

function Filters() {
  // const dispatch = useDispatch();


  // const sortOptions = [
  //   {
  //     value: 'date',
  //     label: 'времени',
  //   },
  //   {
  //     value: 'price__min',
  //     label: 'стоимости',
  //   },
  //   {
  //     value: 'duration',
  //     label: 'длительности',
  //   },
  // ];


  return (
    <section className={styles.filters}>
      <div className={styles.found}>найдено</div>
      <div className={styles.sort}>
        <div className={styles.sorting}>        сортировать по:
        </div>
        <div>
          <SelectionFilter
          // options={sortOptions}
          // onChangeFilters={onChangeFilters}
          />
        </div>
      </div>
      <div className={styles.show}>
        <span className={styles.show__title}>показывать по:</span>
        {/* {amounts.map((amount) => ( */}
        <AmountFilter
        // onChangeFilters={onChangeFilters}
        // key={amount}
        // className={styles.show__amount}
        // amount={amount}
        />
        {/* ))} */}
      </div>
    </section>)
};
export default Filters;