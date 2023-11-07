import React from 'react';

import styles from './OptionItem.module.scss';

function OptionItem({ img, title }) {

  // const dispatch = useDispatch();
  // const options = useSelector(selectOptions);

  // const status = options[name];

  // const clickHandler = () => {
  //   dispatch(changeOptionsFields({ name, value: !status }));
  //   onChangeOption();
  // };

  return (
    <div className={styles.item}>
      <img
        className={styles.item__icon}
        src={img}
        alt={`Иконка - ${title}`}
      />
      <div className={styles.item__title}>{title}</div>

      {/* <button
        type="button"
        onClick={clickHandler}
        className={styles.item__status}
      > */}
        {/* <img src={imgIcon} alt="Иконка - переключатель" /> */}
      {/* </button> */}
    </div >
  )
};

export default OptionItem;