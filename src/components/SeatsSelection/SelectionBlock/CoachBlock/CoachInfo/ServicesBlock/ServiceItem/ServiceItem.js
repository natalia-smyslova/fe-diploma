import { React, useState } from 'react'

import { Tooltip } from 'antd'

import './Popover.scss'

function ServiceItem({
  name,
  included,
  text,
  inactive,
  hover,
  active,
  className,
}) {
  let initialState;

  switch (name) {
    case 'питание':
      initialState = 'inactive'
      break
    case 'белье':
      initialState = included ? 'active' : 'inactive'
      break
    default:
      initialState = 'active'
  }

  const [img, setImg] = useState(initialState)

  const mouseEnterHandler = () => {
    setImg('hover')
  }
  const mouseLeaveHandler = () => {
    setImg(initialState);
  }

  let icon;

  switch (img) {
    case 'active':
      icon = active;
      break;
    case 'hover':
      icon = hover;
      break;
    default:
      icon = inactive;
  }

  let title;

  switch (name) {
    case 'белье':
      title = !included ? text : name;
      break;
    case 'питание':
      title = text;
      break;
    default:
      title = name;
  }

  return (
    <Tooltip overlayClassName="icons-tooltip" title={title} placement="bottom">
      <div
        className={className}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
      >
        <img src={icon} alt="иконка" />
      </div>
    </Tooltip>
  )
}

export default ServiceItem;
