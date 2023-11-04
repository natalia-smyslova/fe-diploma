import React from 'react';

import { useSelector } from 'react-redux';

// import { removeLastTicketsData } from '../../store/slices/lastTicketsSlice';

import LastTicketsCard from './LastTicketsCard/LastTicketsCard';
import styles from './LastTickets.module.scss';

function LastTickets() {

  const lastTickets = useSelector(state => state.lastTickets.lastTickets);
  const error = useSelector(state => state.lastTickets.error);
  // const isLoading = useSelector(state => state.lastTickets.loading);

  return (
    <section className={styles['last-tickets']}>
      <h4 className={styles['last-tickets__header']}> последние билеты</h4>
      <div>
        {!error &&
          lastTickets?.map((ticket) => (
              <LastTicketsCard key={ticket.id} ticket={ticket} />
            ))}
      </div>
      {error && <div className={styles['last-tickets__error']}>{error}</div>}
    </section>
  )

};

export default LastTickets;

