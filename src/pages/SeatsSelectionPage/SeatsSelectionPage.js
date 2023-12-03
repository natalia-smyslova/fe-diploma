import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Layout from "../../components/Layout/Layout";
import SeatsSelectionBody from '../../components/Bodies/SeatsSelectionBody/SeatsSelectionBody';
import SearchBlockHorizontal from '../../components/SearchBlock/SearchBlockHorizontal';

import pictures from '../../components/Layout/pictures';

import styles from './SeatsSelectionPage.module.scss';

import fetchLastTickets from '../../store/thunks/fetchLastTickets';

function SeatSelectionPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLastTickets(process.env.REACT_APP_LAST_TICKETS));
  }, [dispatch]);

  const body = <SeatsSelectionBody />
  return (
    <Layout picture={pictures.selection} body={body} >
      <div className={styles.wrapper}>
        <SearchBlockHorizontal />
      </div>
    </Layout>
  )
};

export default SeatSelectionPage;