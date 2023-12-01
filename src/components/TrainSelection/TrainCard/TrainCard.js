import React from 'react';
import { useDispatch } from 'react-redux';

import dayjs from 'dayjs';

import Direction from './Direction/Direction';
import Train from './Train/Train';
import Seats from './Seats/Seats';

import styles from './TrainCard.module.scss';

import { setId, setTrains } from '../../../store/slices/trainSlice';

function TrainCard({ ticket, id, button }) {
  const dispatch = useDispatch();

  const clickHandler = (event) => {
    if (id !== null) {
      event.preventDefault();
      dispatch(setId(id));
      
      dispatch(setTrains({
        value: ticket.departure,
        direction: 'departure'
      }));

      if (ticket.arrival) {
        dispatch(setTrains({
          value: ticket.arrival,
          direction: 'arrival'
        }))
      }
    }
  }

  return (
    <div className={styles.card} role='button' onClick={clickHandler} tabIndex={0}>
      <div className={styles.card__train}>
        <Train
          trainName1={ticket.departure.train.name}
          departureCity1={ticket.departure.from.city.name}
          arrivalCity1={ticket.departure.to.city.name}
          trainName2={ticket.arrival?.train.name}
          arrivalCity2={ticket.arrival?.to.city.name}
        />
      </div>
      <div className={styles.card__direction}>
        <Direction
          departureTime1={dayjs.unix(ticket.departure.from.datetime).format('HH:mm')}
          departureCity1={ticket.departure.from.city.name}
          departureStation1={ticket.departure.from.railway_station_name}
          duration1={ticket.departure.duration}
          arrivalTime1={dayjs.unix(ticket.departure.to.datetime).format('HH:mm')}
          arrivalCity1={ticket.departure.to.city.name}
          arrivalStation1={ticket.departure.to.railway_station_name}
          departureTime2={dayjs.unix(ticket.arrival?.from.datetime).format('HH:mm')}
          departureCity2={ticket.arrival?.from.city.name}
          departureStation2={ticket.arrival?.from.railway_station_name}
          /* eslint-disable-next-line no-unsafe-optional-chaining */
          duration2={ticket.arrival?.duration}
          arrivalTime2={dayjs.unix(ticket.arrival?.to.datetime).format('HH:mm')}
          arrivalCity2={ticket.arrival?.to.city.name}
          arrivalStation2={ticket.arrival?.to.railway_station_name}
        />
      </div>
      <div className={styles.card__seats}>
        <Seats
          availableSeats={ticket.available_seats_info}
          priceInfoDeparture={ticket.departure?.price_info}
          priceInfoArrival={ticket.arrival?.price_info}
          wifi={ticket.departure.have_wifi || ticket.arrival?.have_wifi}
          airConditioning={ticket.departure.have_air_conditioning || ticket.arrival?.have_air_conditioning}
          isExpress={ticket.departure.is_express || ticket.arrival?.is_express}
          button={button}
        />
      </div>
    </div>
  )
}
export default TrainCard;