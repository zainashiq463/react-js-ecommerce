import { useState } from 'react'

export default function RemoveCartItem() {
  const [count, setCount] = useState(0)

  const handleIncrement = () => setCount(prev => prev + 1)
  const handleDecrement = () => setCount(
    prev => prev === 0 ? prev : prev - 1
  )
  const handleReset = () => setCount(0)
  return (
    <div>
      <h1>Counter</h1>
      <p className='counter-text'>Value : {count}</p>
      <button style={{cursor: 'pointer'}} className='btn-decor' onClick={handleIncrement}>+</button>
      <button disabled={count === 0}
      style={{
      opacity: count === 0 ? 0.5 : 1,
      cursor: count === 0 ? "not-allowed" : "pointer"
      }}
      className='btn-decor' onClick={handleDecrement}>-</button>
      <button style={{
        cursor: count === 0 ? "not-allowed" : 'pointer',
        opacity: count === 0 ? 0.5 : 1
        }} className='btn-decor' onClick={handleReset}>Reset</button>
    </div>
  )
}
