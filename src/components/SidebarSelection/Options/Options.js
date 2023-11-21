import React from 'react';

import OptionItem from './OptionItem/OptionItem';
import options from '../../../utils/constants/options';

function Options({ onChangeOption }) {
  return (
    <div>
      {options.map((item) => (
        <OptionItem
          key={item.id}
          title={item.title}
          img={item.img}
          name={item.name}
          value={item.value}
          onChangeOption={onChangeOption}
        />
      ))}
    </div>
  );
}

export default Options;