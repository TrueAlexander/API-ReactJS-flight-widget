import { useState, useEffect } from 'react'
import TableRow from './TableRow'

const TableBody = () => {

  const [flights, setFlights] = useState(null)

  const getFlights = () => {
    fetch('http://localhost:5555/flights')
      .then(response => response.json())
      .then(flights => {
        const data = Object.values(flights)
        setFlights(data)
      })
      .catch(err => console.log(err))
  }
  useEffect(() => getFlights(), [])

  return (
    <tbody>
      {flights?.map((flight, ind) => (
        <TableRow key={ind} flight={flight} />
      ))}
    </tbody>
  )
}

export default TableBody
