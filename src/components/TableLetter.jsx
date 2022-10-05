import { useState } from "react"

const TableLetter = ({letter, index}) => {

  const [flip, setFlip] = useState(false)
 
  setInterval( () => {
    setFlip(true)
  }, 100 * (index + 1))

  // setInterval(() => {setFlip(true)}, 5000)

  return (
    <div 
    className={flip ? "flip" : ""}
    >
      {flip ? letter : ""}
    </div>
  )
}

export default TableLetter
