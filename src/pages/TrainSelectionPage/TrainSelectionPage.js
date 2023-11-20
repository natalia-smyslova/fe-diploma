import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import fetchLastTickets from '../../store/thunks/fetchLastTickets';
import fetchTrainsOptions from '../../store/thunks/fetchTrainsOptions';

import Layout from "../../components/Layout/Layout";
import SearchBlockHorizontal from '../../components/SearchBlock/SearchBlockHorizontal';
import TrainSelectionBody from '../../components/Bodies/TrainSelectionBody/TrainSelectionBody';

import pictures from '../../components/Layout/pictures';

import styles from './TrainSelectionPage.module.scss';


// import {
//   // fetchTrainsOptions,
//   fetchLastTickets
// } from '../../store/thunks/thunks';

// import {
//   selectTotalCount,
//   // selectLoading as selectLoadingTrains,
// } from '../../store/Slices/trainsSlice';
// // import { selectLoading as selectLoadingLastTickets } from '../../store/Slices/lastTicketsSlice';


// import {
//   // selectSort,
//   selectLimit,
//   // selectOffset,
//   selectCurrentPage,
//   changeOffset,
//   setCurrentPage,
// } from '../../store/Slices/sortSlice';

// let url = useMemo(
//   () => `${process.env.REACT_APP_TICKETS}from_city_id=${departureCity.id
//     }&to_city_id=${arrivalCity.id}&date_start=${dayjs(departureDate).format(
//       'YYYY-MM-DD'
//     )}&start_departure_hour_from=${Math.floor(
//       time.to.departure.min / 60
//     )}&start_departure_hour_to=${Math.floor(
//       time.to.departure.max / 60
//     )}&start_arrival_hour_from=${Math.floor(
//       time.to.arrival.min / 60
//     )}&start_arrival_hour_to=${Math.floor(time.to.arrival.max / 60)}
// &price_from=${prices.min}&sort=${sort.value
//     }&limit=${limit}&offset=${offset}`,
//   [
//     arrivalCity.id,
//     departureCity.id,
//     departureDate,
//     limit,
//     offset,
//     prices.min,
//     sort.value,
//     time.to.arrival.max,
//     time.to.arrival.min,
//     time.to.departure.max,
//     time.to.departure.min,
//   ]
// );
// import styles from './TrainSelectionPage.module.scss';


function TrainSelectionPage() {
  const dispatch = useDispatch();
  const departureCity = useSelector(state => state.search.departureCity);
  const arrivalCity = useSelector(state => state.search.arrivalCity);
  const departureDate = useSelector(state => state.search.departureDate);
  const arrivalDate = useSelector(state => state.search.arrivalDate);
  const limit = useSelector(state => state.sort.limit);
  const sort = useSelector(state => state.sort.sort);
  // const offset = useSelector(selectOffset);
  // const total = useSelector(selectTotalCount);
  // const currentPage = useSelector(selectCurrentPage);
  // const loadingLastTickets = useSelector(selectLoadingLastTickets);

  useEffect(() => {
    dispatch(fetchLastTickets(process.env.REACT_APP_LAST_TICKETS));
  }, [dispatch]);

  let url = useMemo(() => `
    ${process.env.REACT_APP_SEARCH_ROUTES}?from_city_id=${departureCity.id}&to_city_id=${arrivalCity.id}&limit=${limit}&sort=${sort}`,
    [departureCity, arrivalCity, limit, sort]
  );

  if (departureDate) {
    url = `${url}&date_start=${dayjs(departureDate).format('YYYY-MM-DD')}`
  }
  if (arrivalDate) {
    url = `${url}&date_end=${dayjs(arrivalDate).format('YYYY-MM-DD')}`
  }

  useEffect(() => {
    dispatch(fetchTrainsOptions(url));
  }, [dispatch, url]);

  // const onChangePage = (value) => {
  //   dispatch(setCurrentPage(value));
  //   dispatch(changeOffset(value * limit - limit));
  // };
  
  const body = <TrainSelectionBody />

  return (

      <Layout body={body} picture={pictures.selection}>
        <div className={styles.wrapper}>
          <SearchBlockHorizontal />
        </div>
      </Layout>
      // {/* <PaginationBlock
      //   current={currentPage}
      //   onChange={onChangePage}
      //   total={total}
      //   pageSize={limit}
      // /> */}
  
  )

};

export default TrainSelectionPage;