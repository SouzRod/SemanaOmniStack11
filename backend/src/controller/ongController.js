const service = require('../service/ongService')

module.exports = {
    async index (req, res) {
        const result = await service.index()

        return res.json(result)
    },

    async create (req, res) {
        const data = req.body

        const result = await service.create(data)

        return res.json(result)
    }
}