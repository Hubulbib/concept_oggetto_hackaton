import React from 'react';




function Choice(props) {
  if (props.correct) {

  }
  return (
    <div className='choice'>
      <div className='choice__text'>{props.value}</div>
    </div>
  )
}

export default Choice;