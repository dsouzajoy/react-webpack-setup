const { useState } = require('react')

const ClickCounter = () => {
  const [count, setCount] = useState(0)

  return (
    <button
      onClick={() => {
        setCount(count + 1)
      }}
    >
      Click {count}
    </button>
  )
}

export default ClickCounter
