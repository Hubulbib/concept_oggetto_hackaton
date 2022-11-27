import React from 'react';

export default function Inp(props) {

  return (
    <input className={props.class} value={props.value} onChange={e => props.onChange(e.target.value)} placeholder={props.placeholder} type={props.type}></input>
  )
}