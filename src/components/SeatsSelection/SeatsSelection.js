import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import SelectionBlock from './SelectionBlock/SelectionBlock'

import { removePassengersDirection } from '../../store/slices/numberOfPassengersSlice'

import links from '../../utils/constants/links'

import styles from './SeatsSelection.module.scss'

function SeatsSelection() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const direction = useSelector((state) => state.train.trains);
  const departure = direction.departure._id
  const arrival = direction.arrival?._id;

  const [disabled, setDisabled] = useState(true);

  const selectedSeats = useSelector((state) => state.seats.selectedSeats)

  const numberOfPassengers = useSelector(
    (state) => state.numberOfPassengers.numberOfPassengers
  )

  const seatsDeparture = selectedSeats['departure']
    ?.map((item) => item.seats)
    .flat()?.length

  const passDeparture = Object.entries(numberOfPassengers['departure'])?.reduce(
    (currentNumber, item) => currentNumber + item[1],
    0
  )

  const seatsArrival = selectedSeats['arrival']
    ?.map((item) => item.seats)
    ?.flat()?.length
  const passArrival = Object.entries(numberOfPassengers['arrival'])?.reduce(
    (currentNumber, item) => currentNumber + item[1],
    0
  )

  useEffect(() => {
    if (!arrival) {
      dispatch(removePassengersDirection('arrival'))
    }
  }, [arrival, dispatch])

  useEffect(() => {
    if (
      seatsDeparture !== 0 &&
      passDeparture !== 0 &&
      (!arrival || (seatsArrival !== 0 && passArrival !== 0))
    ) {
      if (seatsDeparture === passDeparture && (!arrival || seatsArrival === passArrival)) {
        setDisabled(false)
      } else {
        setDisabled(true)
      }
    }
  }, [disabled, seatsDeparture, passDeparture, seatsArrival, passArrival, arrival, departure])

  const buttonClassNames = `button button-colored ${styles.btn}`

  const clickHandler = () => {
    navigate(links.passengers)
  }

  return (
    <section className={styles.seats}>
      <h3 className={styles.seats__title}>выбор мест</h3>
      {departure && <SelectionBlock direction="departure" />}
      {arrival && <SelectionBlock direction="arrival" />}

      {departure && (
        <div className={styles.wrapper}>
        <button
          type="button"
          className={buttonClassNames}
          onClick={clickHandler}
        >
          далее
        </button>
      </div>
      )}
      
    </section>
  )
}

export default SeatsSelection
