import React from 'react';

import ServiceItem from './ServiceItem/ServiceItem';
import serviceNames from './serviceNames';

// Active
import conditionerActive from './img/active/conditioner.svg';
import wifiActive from './img/active/wifi.svg';
import linensActive from './img/active/linens.svg';
// import foodActive from './img/active/food.svg';

// Hover
import conditionerHover from './img/hover/conditioner.svg';
import wifiHover from './img/hover/wifi.svg';
import linensHover from './img/hover/linens.svg';
import foodHover from './img/hover/food.svg';

// Inactive
// import conditionerInactive from './img/inactive/conditioner.svg';
// import wifiInactive from './img/inactive/wifi.svg';
import linensInactive from './img/inactive/linens.svg';
import foodInactive from './img/inactive/food.svg';

import styles from './ServicesBlock.module.scss';

function ServicesBlock() {


  // const coach = useSelector(selectSeatsOptions)[direction]?.filter(
  //   (item) => item?.coach?.name === coachName
  // )[0]?.coach;

  const services = [
    {
      name: serviceNames.conditioner,
      // status: coach?.have_air_conditioning,
      active: conditionerActive,
      hover: conditionerHover,
    },
    {
      name: serviceNames.wifi,
      // status: coach?.have_wifi,
      active: wifiActive,
      hover: wifiHover,
    },
    {
      name: serviceNames.linens,
      // status: !!coach?.linens_price,
      // text: `белье не включено. стоимость - ${coach?.linens_price} руб.`,
      text: `белье не включено. стоимость - руб.`,
      // included: coach?.is_linens_included,
      active: linensActive,
      inactive: linensInactive,
      hover: linensHover,
    },
    {
      // status: true,
      name: serviceNames.food,
      text: 'питание можно заказать дополнительно',
      inactive: foodInactive,
      hover: foodHover,
    },
  ];


  return (
    <div className={styles.iconsWrapper}>
      {services.map(
        (service) =>
          // service.status && (
            <ServiceItem
            key={service.name}
              // key={coachName + service.name}
              className={styles.icon}
              name={service.name}
              // included={service.included}
              text={service.text}
              active={service?.active}
              inactive={service.inactive}
              hover={service.hover}
              linensPrice={service.linensPrice}
            />
          // )
      )}
    </div>
  );
}

export default ServicesBlock;