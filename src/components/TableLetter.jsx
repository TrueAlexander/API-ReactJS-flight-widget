import { useState } from "react"

const TableLetter = ({letter, index}) => {

  const [flip, setFlip] = useState(false)
 
  setTimeout( () => {
    setFlip(true)
  }, 100 * (index + 1))

  return (
    <div 
    className={flip ? "flip" : ""}
    >
      {flip ? letter : ""}
    </div>
  )
}

export default TableLetter
