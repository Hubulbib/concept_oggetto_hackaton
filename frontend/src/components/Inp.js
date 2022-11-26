import React from 'react';

export default function Inp(props) {
  return (
    <input className={props.class} placeholder={props.value} type={props.type}></input>
  )
} 