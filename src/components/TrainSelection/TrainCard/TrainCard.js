import React from 'react';
 
import dayjs from 'dayjs';
import Direction from './Direction/Direction';
import Train from './Train/Train';
import Seats from './Seats/Seats';
 
// import arrowRight from './img/arrow-right.svg'; 
// import arrowLeft from './img/arrow-left.svg'; 
 
// import links from '../../../utils/constants/links'; 
// import directions from '../../../utils/constants/directions'; 
 
import styles from './TrainCard.module.scss';

 
function TrainCard({ ticket }) { 
  return ( 
    <div className={styles.card}> 
      <div className={styles.card__train}> 
        <Train 
          trainName={ticket.departure.train.name} 
          departureCity={ticket.departure.from.city.name} 
          arrivalCity={ticket.departure.to.city.name} 
        /> 
      </div> 
      <div className={styles.card__direction}> 
        <Direction 
          departureTime={dayjs(ticket.departure.from.datetime).format('HH:mm')} 
          departureCity={ticket.departure.from.city.name} 
          departureStation={ticket.departure.from.railway_station_name} 
          duration={dayjs(ticket.departure.duration).format('HH:mm')} 
          arrivalTime={dayjs(ticket.departure.to.datetime).format('HH:mm')} 
          arrivalCity={ticket.departure.to.city.name} 
          arrivalStation={ticket.departure.to.railway_station_name} 
        /> 
      </div> 
      <div className={styles.card__seats}> 
        <Seats availableSeats={ticket.available_seats_info} minPrice={ticket.min_price}/> 
      </div> 
    </div> 
  ) 
} 
export default TrainCard;