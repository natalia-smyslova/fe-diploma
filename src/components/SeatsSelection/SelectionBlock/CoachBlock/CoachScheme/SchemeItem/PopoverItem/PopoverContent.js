import React from 'react';

// import { Popover } from 'antd';

function PopoverContent() {
  return (
    <>
      {/* {maxNumOfAdults > adultSeats && ( */}
        <button
          type="button"
          // id={passengerTypes.adults}
          // onClick={typeClickHandler}
        >
          взрослого
        </button>
      {/* )} */}
      {/* {maxNumOfChildren + numOfChildren > childrenSeats && ( */}
        <button
          type="button"
          // id={passengerTypes.children}
          // onClick={typeClickHandler}
        >
          ребенка
        </button>
      {/* )} */}
      {/* {maxNumOfAdults <= adultSeats &&
        maxNumOfChildren + numOfChildren <= childrenSeats && ( */}
          <span>вы выбрали максимальное количество мест</span>
        {/* )} */}
    </>
  );
};

export default PopoverContent;