import React from 'react'
import { increment,decrement,count } from './reducer/CounterSlice';
import { useDispatch,useSelector } from 'react-redux';

export default function CounterRedux() {
    const dispatch = useDispatch();
    const countValue = useSelector(count);
  return (
    <>
      <button onClick={() => dispatch(increment())}>increment</button>
      <p>{countValue}</p>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  )
}
