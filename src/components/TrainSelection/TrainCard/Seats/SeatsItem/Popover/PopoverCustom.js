import React from 'react'
import PopoverItem from './PopoverItem'

function PopoverCustom({
  seatNumber,
  type,
  priceInfoDeparture,
  // priceInfoArrival,
}) {
  const seatTypes = {
    top_price: 'верхние',
    bottom_price: 'нижние',
    side_price: 'боковые',
  }

  function getRandomSeats(randomNumber) {
    return Math.floor(Math.random() * randomNumber)
  }

  function getRandomForTwo() {
    const randomFirst = getRandomSeats(seatNumber)
    const randomSecond = seatNumber - randomFirst
    return { randomFirst, randomSecond }
  }

  function getRandomForThree() {
    const randomFirst1 = getRandomSeats(seatNumber)
    const randomSecond1 = getRandomSeats(seatNumber - randomFirst1)
    const randomThird1 = seatNumber - randomFirst1 - randomSecond1
    return { randomFirst1, randomSecond1, randomThird1 }
  }

  const { randomFirst, randomSecond } = getRandomForTwo()

  const { randomFirst1, randomSecond1, randomThird1 } = getRandomForThree()

  return (
    <>
      {(type === 'Купе' || type === 'Люкс' || type === 'Сидячий') && (
        <>
          <PopoverItem
            type={seatTypes.top_price}
            numberSeat={randomFirst}
            priceInfo={priceInfoDeparture?.top_price}
          />

          <PopoverItem
            type={seatTypes.bottom_price}
            numberSeat={randomSecond}
            priceInfo={priceInfoDeparture?.bottom_price}
          />
        </>
      )}

      {type === 'Плацкарт' && (
        <>
          <PopoverItem
            type={seatTypes.top_price}
            numberSeat={randomFirst1}
            priceInfo={priceInfoDeparture?.top_price}
          />

          <PopoverItem
            type={seatTypes.bottom_price}
            numberSeat={randomSecond1}
            priceInfo={priceInfoDeparture?.bottom_price}
          />

          <PopoverItem
            type={seatTypes.side_price}
            numberSeat={randomThird1}
            priceInfo={priceInfoDeparture?.bottom_price}
          />
        </>
      )}
    </>
  )
}

export default PopoverCustom
