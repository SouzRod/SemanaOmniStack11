const service = require('../service/sessionService')

module.exports = {
    async create (req, res) {
        const data = req.body

        const result = await service.create(data)

        if (result.error){
            const { error, status } = result
            return res.status(status).json(error)
        }
        return res.json(result)
    }
}