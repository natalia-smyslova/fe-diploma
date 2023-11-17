import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import AmountFilter from './AmountFilter/AmountFilter';
import SelectionFilter from './SelectionFilter/SelectionFilter';

import styles from './Filters.module.scss';

import { setCurrentPage } from '../../../store/slices/sortSlice';

function Filters() {
  const dispatch = useDispatch();

  const totalCount = useSelector(state => state.trains.totalCount);

  const onChangeFilter = () => {
    dispatch(setCurrentPage(1));
  }

  const numberOfShownItems = [5, 10, 20];


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
      <div className={styles.found}>найдено {totalCount || 0}</div>
      <div className={styles.sort}>
        <div className={styles.sorting}>сортировать по:</div>
        <div>
          <SelectionFilter
          // options={sortOptions}
          // onChangeFilters={onChangeFilters}
          />
        </div>
      </div>
      <div className={styles.show}>
        <span className={styles.show__title}>показывать по:</span>
        {numberOfShownItems.map(numberOfItem => (
          <AmountFilter key={numberOfItem} numberOfItem={numberOfItem} totalCount={totalCount} onChangeFilter={onChangeFilter} />
        ))}
      </div>
    </section>)
};
export default Filters;