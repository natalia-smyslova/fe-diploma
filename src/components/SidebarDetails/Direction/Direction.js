import React, { useState } from 'react'; 
import { useSelector } from 'react-redux'; 
import dayjs from 'dayjs';
 
import plus from '../img/plus.svg'; 
import minus from '../img/minus.svg'; 
import arrowTo from '../img/arrow-to.svg'; 
// import arrowBack from '../img/arrow-back.svg'; 
import arrowDeparture from '../img/arrow-departure.svg'; 
// import arrowArrival from '../img/arrow-arrival.svg'; 
 
import styles from './Direction.module.scss'; 


function Direction({ direction }) {
  const [expanded, setExpanded] = useState(true);
  const expandIcon = expanded ? minus : plus;
  // const arrow = direction === 'departure' ? arrowTo : arrowBack; 
  const directionName = direction === 'departure' ? 'Туда' : 'Обратно'; 
  const train = useSelector(state => state.train.trains)[direction] 
  // const arrivalDate = useSelector(state => state.search.arrivalDate);

  
 
  const duration = train?.duration; 
  const hours = Math.floor(duration / 3600);  
  const minutes = Math.floor((duration - hours * 3600) / 60);  
 
  const timeOfDeparture = dayjs.unix(train?.from.datetime).format('HH:mm'); 
  const dateOfDeparture = dayjs.unix(train?.from.datetime).format('DD.MM.YYYY'); 
 
  const timeOfArrival = dayjs.unix(train?.to.datetime).format('HH:mm'); 
  const dateOfArrival = dayjs.unix(train?.to.datetime).format('DD.MM.YYYY'); 
 
  const departureCity = `${train?.from?.city?.name.charAt(0).toUpperCase()}${train?.from?.city?.name.slice(1)}`; 
  const departureStation = `${train?.from.railway_station_name.charAt(0).toUpperCase()}${train?.from.railway_station_name.slice(1)}`; 
 
  const arrivalCity = `${train?.to.city.name.charAt(0).toUpperCase()}${train?.to.city.name.slice(1)}`; 
  const arrivalStation = `${train?.to.railway_station_name.charAt(0).toUpperCase()}${train?.to.railway_station_name.slice(1)}`;

  const clickHandler = () => {
    setExpanded(!expanded);
  };

  const exp = (
    <div className={styles.expandBlock}>
      <div className={styles.row}>
        <div className={styles.number}>№ Поезда
          <div className={styles.number__left}>{train?.train.name}</div>
          </div>
      </div>
      <div className={styles.totalTime}> {hours} : {minutes}</div>
      <div className={styles.directions}>
        
        <div className={styles.top}>
          <div className={styles.direction}>
            <span className={styles.time}>{timeOfDeparture}</span>
            <div className={styles.date}>{dateOfDeparture}</div>
          </div>
          <div className={styles.arrow}>
            <img src={arrowDeparture} alt="иконка - стрелка" />
          </div>
          <div className={`${styles.direction} ${styles.right}`}>
            <span className={styles.time}>{timeOfArrival}</span>
            <span className={styles.date}>{dateOfArrival}</span>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.direction}>
            <span className={styles.city}>{departureCity}</span>
            <span className={styles.station}>{departureStation}</span>
            <span className={styles.station}>вокзал</span>
          </div>
          <div className={`${styles.direction} ${styles.right}`}>
            <span className={styles.city}>{arrivalCity}</span>
            <span className={styles.station}>{arrivalStation}</span>
            <span className={styles.station}>вокзал</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles.section}>
      <div className={styles.wrapperTop}>
        <div className={styles.header}>
          <img src={arrowTo} alt={`стрелка направления - `} />
          <h4 className={styles.header__text}>{directionName}</h4>
        </div>
        <div className={styles.date}>{dateOfDeparture}</div>
        <button
          className={styles.button}
          type="button"
          onClick={clickHandler}
        >
          <img
            className={styles.expand}
            src={expandIcon}
            alt="иконка управления (открыть/закрыть)"
          />
        </button>
      </div>

      {expanded && exp}
    </div>
  )
};

export default Direction;