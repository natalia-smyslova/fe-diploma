import React from 'react';

import { Popover } from 'antd';

import PopoverContent from './PopoverItem/PopoverContent';
import styles from './SchemeItem.module.scss';
import './PopoverItem/Popover.scss';

function SchemeItem() {

  const popoverContent = <PopoverContent />;

  // const [chosen, setChosen] = useState(chosenSeat);
  // const [clicked, setClicked] = useState(false);
  // const [open, setOpen] = useState(false);

  // const numberOfPassengers = 3;
  // const numOfAdults = 2;
  // const numOfChildren = 1;

  const seatClickHandler = () => {
    // setOpen(false);
    // setClicked(!clicked);
    // if (!clicked) {
    //   setOpen(true);
    // }
    // if (chosen) {
    //   setChosen(false);
    //   setOpen(false);
    //   setClicked(false);
    // dispatch(removeSelectedSeat({ number, direction, coachId }));
    // dispatch(
    //   removeSeatInfoAfterUnchoosingSeat({ coachId, seatNumber: number })
    // );
    // if (numberOfPassengers[typeOfPassenger] >= 1) {
    //   dispatch(
    //     setNumOfPassengers({
    //       category: typeOfPassenger,
    //       direction,
    //       value: numberOfPassengers[typeOfPassenger] - 1,
    //     })
    //   );
    // }
  }


  return (
    <>
      {/* {!taken && (
        <Popover
          overlayClassName="seatItem"
          placement="top"
          title="место для"
          trigger="click"
          content={popoverContent}
          open={open}
        > */}
      {/* </Popover> */}
      {/* )} */}
      {/* {taken && ( */}
      <Popover
        overlayClassName="seatItem"
        placement="top"
        title="место для"
        trigger="click"
        content={popoverContent}
        // open={open}
      >
        <button
          onClick={seatClickHandler}
          type="button"
          className={styles['seat-first__odd']}
        // disabled={taken}
        >

          {/* {number} */}
          9
        </button>
      </Popover>
      {/* )} */}
    </>
  )
};


export default SchemeItem;
