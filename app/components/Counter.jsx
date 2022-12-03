import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../counterSlice'

const Counter = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <button
      className="py-2 px-4 bg-amber-500 shadow-md font-semibold text-sm text-white"
      onClick={() => dispatch(increment())}
    >
      Clicked {count} times
    </button>
  )
}

export default Counter
