import React from 'react';

export default function Btn(props) {
  return (
    <button className={props.class} onClick={props.func} link={props.src}>
      {props.value}
    </button>
  )
} 