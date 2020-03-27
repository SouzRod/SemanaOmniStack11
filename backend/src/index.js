const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const port = 3000
const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(port, (err) => {
    if(err) console.error(err)

    console.log(`Server running on port ${port}`)
})