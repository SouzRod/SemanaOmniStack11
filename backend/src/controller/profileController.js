const service = require('../service/profileService')

module.exports = {
    async index (req, res) {
        const ong_id = req.headers.authorization

        const result = await service.index(ong_id)

        return res.json(result)
    }
}