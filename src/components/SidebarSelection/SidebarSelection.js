import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Calendar from '../SearchBlock/Calendar/Calendar';
import Options from './Options/Options';
import Direction from './Direction/Direction';
import PriceSlider from './PriceSlider/PriceSlider';

import styles from './SidebarSelection.module.scss';
import links from '../../utils/constants/links';

import { removeSearchData } from '../../store/slices/searchSlice';

function SidebarSelection() {
  const pathname = useLocation();
  const navigate = useNavigate();
  const arrivalDate = useSelector(state => state.search.arrivalDate);

  const onChangeOption = () => {
    removeSearchData();
    if (pathname !== links.trains) {
      navigate(links.trains);
    }
  }

  return (
    <section className={styles.wrapper}>
      <div className={styles.module}>
        <h4 className={styles.module__title}>Дата поездки</h4>
        <Calendar placeholder='ДД/ММ/ГГ' name='departureDate' />
        <h4 className={styles.module__title}>Дата возвращения</h4>
        <Calendar placeholder='ДД/ММ/ГГ' name='arrivalDate' />
      </div>
      <div className={styles.module}>
        <Options onChangeOption={onChangeOption} />
      </div>
      <div className={styles.module}>
        <h4 className={styles.module__title}>Стоимость</h4>
        <PriceSlider onChangePrice={onChangeOption} />
      </div>
      <Direction onChangeTime={onChangeOption} direction="departure" name="from" nameRus="Туда" />
      {arrivalDate && <Direction onChangeTime={onChangeOption} direction="arrival" name="to" nameRus="Обратно" />}
    </section>
  )
};

export default SidebarSelection;