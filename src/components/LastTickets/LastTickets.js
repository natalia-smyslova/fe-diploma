import React from 'react';

import { useSelector } from 'react-redux';

import {
  selectLastTickets,
  selectError,
} from '../../store/Slices/lastTicketsSlice';

import LastTicketsCard from './LastTicketsCard/LastTicketsCard';
import styles from './LastTickets.module.scss';

function LastTickets() {
  const lastTickets = useSelector(selectLastTickets);
  const error = useSelector(selectError);
  return (
    <section className={styles['last-tickets']}>
      <h4 className={styles['last-tickets__header']}> последние билеты</h4>
      <div>
        {!error &&
          lastTickets
            ?.slice(-3)
            .map((ticket) => (
              <LastTicketsCard key={ticket.id} ticket={ticket} />
            ))}
      </div>
      {error && <div className={styles['last-tickets__error']}>{error}</div>}
    </section>
  )

};

export default LastTickets;

