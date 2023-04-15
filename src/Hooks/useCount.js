import React, { useState } from 'react'

const useCount = (initial = 1, min, max) => {
  if (initial < min || initial > max) {
    initial = min
  }

  const [count, setCount] = useState(initial)

  const add = () => count < max && setCount(count + 1)

  const substract = () => count > min && setCount(count - 1)

  const reset = () => setCount(initial)
  
  return { count, add, substract, reset }
}

export default useCount