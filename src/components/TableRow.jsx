import TableCell from './TableCell'

const TableRow = ({ flight }) => {

  const flightLine = {
    time: flight.departing,
    destination: flight.destination,
    flightNumber: flight.flightNumber[0],
    gate: flight.gate,
    remarks: flight.status,
  }

  const words = Object.values(flightLine)

  return (
    <tr>
      <td>✈</td>
      {words?.map((word, _index) => <TableCell key={_index} word={word} />)}
    </tr>
  )
}

export default TableRow
