import React from 'react';
import { useSelector } from 'react-redux';

import TrainCard from './TrainCard/TrainCard';
// import Filters from './Filters/Filters';

import styles from './TrainSelection.module.scss';

function TrainSelection() {
  const trainsOptions = useSelector(state => state.trains.trainsOptions);
  return (
    <section className={styles.trainSelection}>
    {/* <Filters /> */}
      {/* {error && <div>{error}</div>} */}
      {trainsOptions?.map((item) => (
        <TrainCard key={item.id} ticket={item.ticket} id={item.id} />
      ))}
      {/* {(!trainsOptions || trainsOptions?.length < 1) && !loading && (
        <div className={styles.text}>
          Поезда не найдены. Выберите другую дату или маршрут
        </div>
      )} */}
    </section>
  );
}

export default TrainSelection;