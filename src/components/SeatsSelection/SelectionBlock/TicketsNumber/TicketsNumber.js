import React from 'react';

import { Form, Input } from 'antd';

import styles from './TicketsNumber.module.scss';

function TicketsNumber() {
  return (
    <div className={styles.seats}>
      <h4 className={styles.title}>Количество билетов</h4>
      <Form className={styles.form}>
        <Form.Item className={styles.formItem}>
          <Input
            type="number"
            prefix="Взрослых — "
            defaultValue={0}
            // value={adultCount}
            min={0}
            // max={maxAdultTicketsCount}
            className={styles.input}
            // onChange={(evt) => {
            //   if (Number(evt.target.value) >= adultSeats) {
            //     dispatch(
            //       setNumOfPassengers({
            //         category: passengerTypes.adults,
            //         direction,
            //         value: Number(evt.target.value),
            //       })
            //     );
            //   }
            // }}
          />
          {/* <div>
            {` Можно добавить еще ${maxAdultTicketsCount - adultCount}  ${maxAdultTicketsCount - adultCount === 1
                ? 'пассажира'
                : 'пассажиров'
              }`}
          </div> */}
        </Form.Item>
        <Form.Item className={styles.formItem}>
          <Input
            type="number"
            prefix="Детских — "
            defaultValue={0}
            // value={childrenCount}
            min={0}
            // max={maxChildrenTicketsCount + childrenCount}
            className={styles.input}
            // onChange={(evt) => {
            //   if (Number(evt.target.value) >= childrenSeats) {
            //     dispatch(
            //       setNumOfPassengers({
            //         category: passengerTypes.children,
            //         direction,
            //         value: Number(evt.target.value),
            //       })
            //     );
            //   }
            // }}
          />
          {/* <div>
            {`Можно добавить еще ${maxChildrenTicketsCount} ${ticketWord} для детей до 10 лет.
              Свое место в вагоне, как у взрослых, но дешевле в среднем на
              50-65%`}
          </div> */}
        </Form.Item>
        <Form.Item className={styles.formItem}>
          <Input
            type="number"
            prefix="Детских «без места» — "
            defaultValue={0}
            // value={toddlerCount}
            min={0}
            // max={maxToddlersTicketsCount + toddlerCount}
            className={styles.input}
            // onChange={(evt) =>
            //   dispatch(
            //     setNumOfPassengers({
            //       category: passengerTypes.toddlers,
            //       direction,
            //       value: Number(evt.target.value),
            //     })
            //   )
            // }
          />
          {/* <div>
            {` Можно добавить еще ${maxToddlersTicketsCount} ${ticketWord} для младенцев.`}
          </div> */}
        </Form.Item>
      </Form>
    </div>
  );
};

export default TicketsNumber;