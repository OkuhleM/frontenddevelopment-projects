import React, { useState } from 'react';
import './App.css';


const App = () => {

  const [state, setState] = useState("");

  const input = (param) => {
    var last = state.length - 1;
    if (isNaN(parseInt(state[last])) && isNaN(parseInt(param))) {
      return
    } else {
      var current = [...state, param]
      setState(current.join(""))
    }
  }

  const equals = () => {
    var rule = ["()", "/", "*", "+", "-"]
    var anythingInBrackets = /^([0-9|\/]+)$/g
    var vInBrackets = state.match(anythingInBrackets)
    console.log(vInBrackets)
  }

  const clearState = () => {
    console.log("cleared")
  }

  return (
    <div className='card-container'>
      <div id='display'>
        {state}
      </div>
      <div className='container'>

        <button onClick={() => input('1')} id='one'>1</button>
        <button onClick={() => input('2')} id='two'>2</button>
        <button onClick={() => input('3')} id='three'>3</button>
        <button onClick={() => input('+')} id='add'>+</button>
        <button onClick={() => input('4')} id='four'>4</button>
        <button onClick={() => input('5')} id='five'>5</button>
        <button onClick={() => input('6')} id='six'>6</button>
        <button onClick={() => input('-')} id='subtract'>-</button>
        <button onClick={() => input('7')} id='seven'>7</button>
        <button onClick={() => input('8')} id='eight'>8</button>
        <button onClick={() => input('9')} id='nine'>9</button>
        <button onClick={() => input('*')} id='multiply'>x</button>
        <button onClick={() => clearState('C')} id='clear'>C</button>
        <button onClick={() => input('0')} id='zero'>0</button>
        <button onClick={() => equals()} id='equals'>&#61;</button>
        <button onClick={() => input('.')} id='decimal'>.</button>
        <button onClick={() => input('/')} id='divide'>&#247;</button>

      </div>
    </div>
  )
}

export default App;