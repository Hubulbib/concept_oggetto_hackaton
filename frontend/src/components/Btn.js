import React from 'react';

export default function Btn(props) {
  return (
    <button className={props.class} onClick={props.onClick ? props.onClick(props.data.username, props.data.password) : null}>
      {props.value}
    </button>
  )
} 