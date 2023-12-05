import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Popover } from 'antd'

import styles from './SeatItem.module.scss'
import './Popover.scss'

import { setNumberOfPassengers } from '../../../../../../../store/slices/numberOfPassengersSlice';
import { removeSelectedSeat, addSelectedSeats } from '../../../../../../../store/slices/seatsSlice';
import { removeSeatInfoAgain } from '../../../../../../../store/slices/passengerSlice'

function SeatItem({
  number,
  coachClass,
  taken,
  direction,
  coachId,
  coachName,
  price,
  chosenSeat,
  // adultSeats,
  // childrenSeats,
  typeOfPassenger,
}) {
  const adultSeats = 3;
  const childrenSeats = 1;
  const dispatch = useDispatch()
  const [chosen, setChosen] = useState(chosenSeat)
  const [clicked, setClicked] = useState(false)
  const [open, setOpen] = useState(false)

  const numberOfPassengers = useSelector(state => state.numberOfPassengers.numberOfPassengers)[direction];
  const numberOfAdults = numberOfPassengers?.adults;
  const numberOfChildren = numberOfPassengers?.children;
  // const maxNumberOfAdults = useSelector(state => state.numberOfPassengers.maxNumberOfAdults)[direction];
  // const maxNumberOfChildren = useSelector(state => state.numberOfPassengers.maxNumberOfChildren)[direction];


  let className = `${styles[`seat-${coachClass}`]} ${styles.seat} ${
    taken && styles['seat-taken']
  } ${chosen && styles['seat-chosen']} ${clicked && styles['seat-clicked']}`;

  switch (coachClass) {
    case 'first':
      className += ` ${number % 2 === 1 && styles[`seat-${coachClass}__odd`]} 
   ${number === 18 && styles[`seat-${coachClass}-last`]} 
   `
      break
    case 'second':
      className += ` ${
        number % 4 === 1 && styles[`seat-${coachClass}__bottomLeft`]
      } 
     ${number % 4 === 3 && styles[`seat-${coachClass}__bottomRight`]} 
     ${number % 4 === 2 && styles[`seat-${coachClass}__topLeft`]} 
     ${number >= 35 && styles[`seat-${coachClass}-last`]}`
      break
    case 'third':
      className += ` ${
        number % 4 === 1 &&
        number <= 36 &&
        styles[`seat-${coachClass}__bottomLeft`]
      } 
        ${
          number % 4 === 3 &&
          number <= 36 &&
          styles[`seat-${coachClass}__bottomRight`]
        } 
        ${
          number % 4 === 2 &&
          number <= 36 &&
          styles[`seat-${coachClass}__topLeft`]
        } 
        ${(number === 35 || number === 36) && styles[`seat-${coachClass}-last`]}
        ${number > 36 && styles[`seat-${coachClass}-side`]}
        ${
          number > 36 &&
          number % 2 === 0 &&
          styles[`seat-${coachClass}-side-even`]
        }
        ${number === 54 && styles[`seat-${coachClass}-side-even-last`]}`
      break
    default:
      className += ` 
         ${
           (number === 1 || number === 2) && styles[`seat-${coachClass}__first`]
         } 
         ${number === 37 && styles[`seat-${coachClass}__37`]}
        ${number === 38 && styles[`seat-${coachClass}__38`]}
        ${number === 68 && styles[`seat-${coachClass}__68`]}
        `
  }

  const seatClickHandler = () => {
    setOpen(false)
    setClicked(!clicked)
    if (!clicked) {
      setOpen(true)
    }
    if (chosen) {
      setChosen(false)
      setOpen(false)
      setClicked(false)
      dispatch(removeSelectedSeat({ number, direction, coachId }))
      dispatch(
        removeSeatInfoAgain({ coachId, seatNumber: number })
      )
      if (numberOfPassengers[typeOfPassenger] >= 1) {
        dispatch(
          setNumberOfPassengers({
            category: typeOfPassenger,
            direction,
            value: numberOfPassengers[typeOfPassenger] - 1,
          })
        )
      }
    }
  }

  const typeClickHandler = (event) => {
    if (event.target.id === 'adults') {
      dispatch(
        setNumberOfPassengers({
          category: 'adults',
          direction,
          value: adultSeats + 1,
        })
      )
    }
    if (event.target.id === 'children') {
      dispatch(
        setNumberOfPassengers({
          category: 'children',
          direction,
          value: childrenSeats + 1,
        })
      )
    }
    dispatch(
      addSelectedSeats({
        number,
        direction,
        coachId,
        coachName,
        price,
        priceCoef: event.target.id === 'adults' ? 1 : 0.5,
      })
    )
    setChosen(true)
    setClicked(false)
    setOpen(false)
  }

  const popoverContent = (
    <>
        <button
          type="button"
          id='adults'
          onClick={typeClickHandler}
        >
          взрослого
        </button>

        <button
          type="button"
          id='children'
          onClick={typeClickHandler}
        >
          ребенка
        </button>

    </>
  )

  let visibleSeatNumber = ''

  switch (typeOfPassenger) {
    case 'adults':
      visibleSeatNumber = 'B'
      break
    case 'children':
      visibleSeatNumber = 'P'
      break
    default:
      visibleSeatNumber = number
  }

  return (
    <>
      {!taken && (
        <Popover
          overlayClassName="seatItem"
          placement="top"
          title="место для"
          trigger="click"
          content={popoverContent}
          open={open}
        >
          <button
            onClick={seatClickHandler}
            type="button"
            className={className}
            disabled={taken}
          >
            {visibleSeatNumber}
          </button>
        </Popover>
      )}
      {taken && (
        <button
          onClick={seatClickHandler}
          type="button"
          className={className}
          disabled={taken}
        >
          {number}
        </button>
      )}
    </>
  )
}

export default SeatItem;
