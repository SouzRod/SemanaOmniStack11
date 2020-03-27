const express = require('express')
const OngController = require('./controller/ongController')
const IncidentController = require('./controller/incidentController')
const ProfileController = require('./controller/profileController')
const SessionController = require('./controller/sessionController.js')

const routes = express.Router()

routes.get('/', (req, res) => {
    res.send('Hello World!')
})

routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)

routes.get('/profile', ProfileController.index)

module.exports = routes