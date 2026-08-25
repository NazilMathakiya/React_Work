import React from 'react'
import { useState } from 'react'

function FAQ(props) {
  const [value,setValue]=useState(false);
  
  function ans(){
    setValue(!value);
  }

  return (
    <div>
      <h2>Question:{props.que}</h2>
      <button onClick={ans}>
        {value?"Hide Answer":"Show Answer"}
      </button>
      {value && (
        <b><p>{props.ans}</p></b>
      )}
    </div>
  )
}

export default FAQ