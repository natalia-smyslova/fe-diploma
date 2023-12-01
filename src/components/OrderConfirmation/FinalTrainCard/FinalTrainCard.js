import React from 'react';
import { useSelector } from 'react-redux';

import styles from './FinalTrainCard.module.scss';

import TrainCard from '../../TrainSelection/TrainCard/TrainCard';

function FinalTrainCard({ button }) {
  const selectedTrainIndex = useSelector(state => state.train.selectedId);
  const trainsOptions = useSelector(state => state.trains.trainsOptions);

  return (
    <div className={styles.card}>
      <div className={styles.header}>Поезд</div>
      <TrainCard
        ticket={trainsOptions[selectedTrainIndex]?.ticket}
        id={selectedTrainIndex}
        button={button}
      />
    </div>
  )
};

export default FinalTrainCard;