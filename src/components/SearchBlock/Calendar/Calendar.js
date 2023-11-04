import React, { useEffect, useState } from "react";

import { ConfigProvider, DatePicker} from 'antd';
import locale from "antd/es/date-picker/locale/ru_RU";
import dayjs from "dayjs";
import customParseFormat from 'dayjs/plugin/customParseFormat';
import 'dayjs/locale/ru';
import { useDispatch, useSelector } from "react-redux";

import { getInputValue } from "../../../store/slices/searchSlice";

dayjs.locale('ru_RU', {weekStart: 0});
dayjs.extend(customParseFormat);

const dateFormat = 'DD.MM.YYYY';

const minDate = new Date();
const maxDate = new Date(dayjs(minDate).add(90, 'days')).toJSON();

const disabledDate = currentDate => currentDate && (currentDate <= dayjs(minDate) || currentDate >= dayjs(maxDate));

function Calendar({name, placeholder }){
  
  const dispatch = useDispatch();

  const departureDate = useSelector(state => state.search.departureDate);
  const arrivalDate = useSelector(state => state.search.arrivalDate);
  const [dateValue, setDateValue] = useState('');

  useEffect(() => {
    if (name === 'departureDate') {
      setDateValue(departureDate ? dayjs(new Date(departureDate)) : '');
    }
    if (name === 'arrivalDate') {
      setDateValue(arrivalDate ? dayjs(new Date(arrivalDate)) : '');
    }
  }, [departureDate, arrivalDate, name]);

  const changeHandler = (date) => {
    setDateValue(date);
    dispatch(getInputValue({ name, value : dayjs(date).toJSON() }));
  }

  return (
    <ConfigProvider theme={{
      components: {
        DatePicker: {
          
        }
      }
    }}>
      <DatePicker 
        value={dateValue}
        locale={locale} 
        onChange={changeHandler} 
        placeholder={placeholder} 
        format={dateFormat} 
        showToday={false} 
        disabledDate={disabledDate}
        style={{
          width: 325,
          height: 65
        }}/>
    </ConfigProvider>
  )
};

export default Calendar;