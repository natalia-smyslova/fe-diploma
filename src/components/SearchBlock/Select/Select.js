import React, { useEffect, useState } from 'react';
import { useDebounce } from "@uidotdev/usehooks";

import { AutoComplete, ConfigProvider } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { getInputValue } from '../../../store/slices/searchSlice';

import styles from './Select.module.scss';

function SelectItem({ name, placeholder }) {
  const dispatch = useDispatch();

  const departureCity = useSelector(state => state.search.departureCity);
  const arrivalCity = useSelector(state => state.search.arrivalCity);
  const [inputValue, setInputValue] = useState('');
  const [listOfCities, setListOfSities] = useState([]);
  const debouncedSearchTerm = useDebounce(inputValue, 300);

  useEffect(() => {
    if (name === 'departureCity') {
      setInputValue(departureCity.name);
    }
    if (name === 'arrivalCity') {
      setInputValue(arrivalCity.name);
    }
  }, [departureCity, arrivalCity, name]);

  async function fetchCities (value) {
    try {
      const response = await fetch(`${process.env.REACT_APP_SEARCH_CITY}=${value}`);

      if (!response.ok) {
        throw new Error('Response Error');
      }

      const data = await response.json();
      setListOfSities(data.map((city) => ({ label: city.name, value: city['_id'] })));

    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchCities(inputValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchTerm]);

  const searchHaldler = (value) => {
    setInputValue(value);   
    if (value.trim() === '') {
      dispatch(getInputValue({ name, value: { id: null, name: null } }));
    }
  }

  const selectHandler = (data) => {
    const cityName = listOfCities.find((item) => item.value === data).label;
    setInputValue(cityName);
    dispatch(getInputValue({name, value : {id: data, name: cityName}}));
  }

  return (
    <ConfigProvider
      theme={{
        components: {
          Select: {
            optionFontSize: 18,
            optionHeight: 57,
            optionPadding: '13px 19px'
          }
        }
      }}  
    >
      <AutoComplete 
      className={styles.input}
      name={name} 
      placeholder={placeholder} 
      options={listOfCities}
      onSelect={selectHandler}
      onSearch={searchHaldler}
      value={inputValue}
      allowClear
       />
    </ConfigProvider>
  )
}

export default SelectItem;