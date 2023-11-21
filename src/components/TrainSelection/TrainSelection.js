import React from 'react';
import { useSelector } from 'react-redux';

import TrainCard from './TrainCard/TrainCard';
import Filters from './Filters/Filters';

import styles from './TrainSelection.module.scss';

function TrainSelection() {
  const trainsOptions = useSelector(state => state.trains.trainsOptions);
  const totalCount = useSelector(state => state.trains.totalCount);

  return (
    <section className={styles.trainSelection}>
      {totalCount !== 0 && (
        <Filters />
      )}

      {totalCount === 0 && (
        <p>Извините, ничего не найдено</p>
      )}

      {trainsOptions?.map((item) => (
        <TrainCard key={item.id} ticket={item.ticket} id={item.id} />
      ))}
    </section>
  );
}

export default TrainSelection;