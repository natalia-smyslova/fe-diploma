import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Form, Input } from 'antd';
import { setNumberOfPassengers } from '../../../../store/slices/numberOfPassengersSlice';

import styles from './TicketsNumber.module.scss';

function TicketsNumber({ direction }) {
  const dispatch = useDispatch();

  const numberOfTickets = useSelector(state => state.numberOfPassengers.numberOfPassengers[direction]);

  const adultTickets = numberOfTickets.adults;
  const childrenTickets = numberOfTickets.children;
  const babiesTickets = numberOfTickets.babies;

  const maxAdultsTickets = useSelector(state => state.numberOfPassengers.maxNumberOfAdults);
  const maxChildrenTickets = useSelector(state => state.numberOfPassengers.maxNumberOfChildren);
  // const maxBabiesTickets = useSelector(state => state.numberOfPassengers.maxNumberOfBabies); 

  const changeAdultHandler = (event) => {
    if (Number(event.target.value) !== adultTickets) {
      dispatch(
        setNumberOfPassengers({
          age: 'adults',
          direction,
          value: Number(event.target.value)
        })
      );
    }
  }

  const changeChildrenHandler = (event) => {
    if (Number(event.target.value) !== childrenTickets) {
      dispatch(
        setNumberOfPassengers({
          age: 'children',
          direction,
          value: Number(event.target.value)
        })
      );
    }
  }

  const changeBabiesHandler = (event) => {
    if (Number(event.target.value) !== babiesTickets) {
      dispatch(
        setNumberOfPassengers({
          age: 'babies',
          direction,
          value: Number(event.target.value)
        })
      );
    }
  }

  const currentAdults = maxAdultsTickets - adultTickets - childrenTickets;
  const currentChildren = adultTickets !== 0 ? adultTickets * 2 - childrenTickets : 0;
  const maxCurrentChildren = currentChildren !== 0 ? maxChildrenTickets - currentChildren : 0;
  const currentBabies = currentAdults;
  const maxCurrentBabies = adultTickets !== 0 ? maxAdultsTickets : 0;

  return (
    <div className={styles.seats}>
      <h4 className={styles.title}>Количество билетов</h4>
      <Form className={styles.form}>
        <Form.Item className={styles.formItem}>
          <Input
            type="number"
            prefix="Взрослых — "
            defaultValue={0}
            value={adultTickets}
            min={0}
            max={maxAdultsTickets}
            className={styles.input}
            onChange={changeAdultHandler}
          />
          <div>
            {` Можно добавить еще ${currentAdults} пассажиров`}
          </div>
        </Form.Item>
        <Form.Item className={styles.formItem}>
          <Input
            type="number"
            prefix="Детских — "
            defaultValue={0}
            value={childrenTickets}
            min={0}
            max={maxCurrentChildren}
            className={styles.input}
            onChange={changeChildrenHandler}
          />
          <div>
            {`Можно добавить еще ${currentChildren} детей до 10 лет.
              Свое место в вагоне, как у взрослых, но дешевле в среднем на
              50-65%`}
          </div>
        </Form.Item>
        <Form.Item className={styles.formItem}>
          <Input
            type="number"
            prefix="Детских «без места» — "
            defaultValue={0}
            value={babiesTickets}
            min={0}
            max={maxCurrentBabies}
            className={styles.input}
            onChange={changeBabiesHandler}
          />
          <div>
            {` Можно добавить еще ${currentBabies} младенцев без места.`}
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default TicketsNumber;