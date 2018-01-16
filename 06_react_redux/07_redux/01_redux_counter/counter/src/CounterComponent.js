import React from 'react';
import { connect } from "react-redux";


function CounterCmp(props) {
  return(
    <div>
      <button onClick={props.decrement}> - </button>
      <span>{props.counter}</span>
      <button onClick={props.increment}> + </button>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch({type: "INCREMENT"}),
    decrement: () => dispatch({type: 'DECREMENT'})
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter.counter,
  }
}



const CounterComponent = connect(mapStateToProps, mapDispatchToProps)(CounterCmp);
export default CounterComponent;
