import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import dayjs from 'dayjs';

import fetchLastTickets from '../../store/thunks/fetchLastTickets';
import fetchTrainsOptions from '../../store/thunks/fetchTrainsOptions';

import Layout from "../../components/Layout/Layout";
import SearchBlockHorizontal from '../../components/SearchBlock/SearchBlockHorizontal';
import TrainSelectionBody from '../../components/Bodies/TrainSelectionBody/TrainSelectionBody';
import pictures from '../../components/Layout/pictures';
import LoadingAnimation from '../../components/LoadingAnimation/LoadingAnimation';

import styles from './TrainSelectionPage.module.scss';

import { changeOffset, setCurrentPage } from '../../store/slices/sortSlice';

function TrainSelectionPage() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.trains.loading);
  const departureCity = useSelector(state => state.search.departureCity);
  const arrivalCity = useSelector(state => state.search.arrivalCity);
  const departureDate = useSelector(state => state.search.departureDate);
  const arrivalDate = useSelector(state => state.search.arrivalDate);
  const limit = useSelector(state => state.sort.limit);
  const sort = useSelector(state => state.sort.sort);
  const options = useSelector(state => state.options.options);
  const price = useSelector(state => state.price.price);
  const offset = useSelector(state => state.sort.offset);
  const time = useSelector(state => state.time.time);

  useEffect(() => {
    dispatch(fetchLastTickets(process.env.REACT_APP_LAST_TICKETS));
  }, [dispatch]);

  let url = useMemo(() => `
    ${process.env.REACT_APP_SEARCH_ROUTES}?from_city_id=${departureCity.id}&to_city_id=${arrivalCity.id}`,
    [departureCity, arrivalCity, limit, sort, offset, options, price, time]
  );

  if (limit) {
    url = `${url}&limit=${limit}`;
  }

  if (offset) {
    url = `${url}&offset=${offset}`;
  }

  if (sort) {
    url = `${url}&sort=${sort}`
  }

  if (departureDate) {
    url = `${url}&date_start=${dayjs(departureDate).format('YYYY-MM-DD')}`
  }
  if (arrivalDate) {
    url = `${url}&date_end=${dayjs(arrivalDate).format('YYYY-MM-DD')}`
  }

  if (options.haveSecondClass) {
    url = `${url}&have_second_class=${options.haveSecondClass}`
  }

  if (options.haveThirdClass) {
    url = `${url}&have_third_class=${options.haveThirdClass}`
  }

  if (options.haveFourthClass) {
    url = `${url}&have_fourth_class=${options.haveFourthClass}`
  }

  if (options.haveFirstClass) {
    url = `${url}&have_first_class=${options.haveFirstClass}`
  }

  if (options.haveWifi) {
    url = `${url}&have_wifi=${options.haveWifi}`
  }

  if (options.isExpress) {
    url = `${url}&have_express=${options.isExpress}`;
  }

  if (options.haveAirConditioning) {
    url = `${url}&have_air_conditioning=${options.haveAirConditioning}`
  }

  if (price.min) {
    url = `${url}&price_from=${price.min}`
  }

  if (price.max) {
    url = `${url}&price_to=${price.max}`
  }

  if (time) { 
    url = `${url}&start_departure_hour_from=${ 
      time.from.departure?.min}&start_departure_hour_to=${ 
      time.from.departure?.max}&start_arrival_hour_from=${ 
      time.from.arrival?.min}&start_arrival_hour_to=${ 
      time.from.arrival?.max}`; 
 
    if (arrivalDate) { 
      url = `${url}&end_departure_hour_from=${ 
        time.to?.departure?.min}&end_departure_hour_to=${ 
        time.to?.departure?.max}&end_arrival_hour_from=${ 
        time.to?.arrival?.min}&end_arrival_hour_to=${ 
        time.to?.arrival?.max}` 
    } 
  }

  useEffect(() => {
    dispatch(fetchTrainsOptions(url));
  }, [dispatch, url]);

  useEffect(() => {
    dispatch(changeOffset(0));
    dispatch(setCurrentPage(1));
  }, [departureCity, arrivalCity, departureDate, arrivalDate, limit, sort, options, price, time]);
  
  const body = loading && <LoadingAnimation /> || <TrainSelectionBody />


  return (
      <Layout body={body} picture={pictures.selection}>
        <div className={styles.wrapper}>
          <SearchBlockHorizontal />
        </div>
      </Layout>
  )

};

export default TrainSelectionPage;