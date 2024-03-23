import React from 'react'
import './DefaultInputs.css'
import InputBox from '../InputBox/InputBox';

interface Props {
  onUpperBoundChange: (bound: number) => void;
  onLowerBoundChange: (bound: number) => void;
}
function DefaultInputs(props: Props) {
  const minGap = 10;
  return (
    <div className="container">
      <div className="inputs-container">
        <InputBox label="Enter Lower Bound" />
        <InputBox label="Enter Upper Bound" />
      </div>
      <button>Start Guessing!</button>
    </div>
  );
}

export default DefaultInputs