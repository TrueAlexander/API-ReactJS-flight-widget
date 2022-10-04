import express from 'express'
import cors from 'cors'
import axios from 'axios'

const PORT = 5555
const app = express()
app.use(cors())

app.get('/flights', async (req, res) => {

  const options = {
    method: 'GET',
        url: 'https://toronto-pearson-airport.p.rapidapi.com/departures',
        headers: {
            'X-RapidAPI-Key': 'cb474fceedmsh7bc6e39bf3d5a3dp1dd4ecjsn766638ee8651',
            'X-RapidAPI-Host': 'toronto-pearson-airport.p.rapidapi.com'
        }
  }

  axios.request(options).then(function (response) {
    res.json(response.data.slice(0,8))
  }).catch(function (error) {
    console.error(error)
  })
})

app.listen(PORT, (err) => {
  if (err) {
    return console.log(err)
  }
  console.log(`Server OK on port: ` + PORT)
})
