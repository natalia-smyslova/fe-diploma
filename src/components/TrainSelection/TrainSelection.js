import React from 'react';

import TrainCard from './TrainCard/TrainCard';

import styles from './TrainSelection.module.scss';

function TrainSelection() {

  return (
    <section className={styles.trainSelection}>
      {error && <div>{error}</div>}
      {trainsOptions?.map((item) => (
        <TrainCard key={item.id} ticket={item.ticket} id={item.id} />
      ))}
      {(!trainsOptions || trainsOptions?.length < 1) && !loading && (
        <div className={styles.text}>
          Поезда не найдены. Выберите другую дату или маршрут
        </div>
      )}
    </section>
  );
}

export default TrainSelection;