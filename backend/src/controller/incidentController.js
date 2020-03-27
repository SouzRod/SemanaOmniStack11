const service = require('../service/incidentService')

module.exports = {
    async index (req, res) {
        const { page } = req.query
        const payload = await service.index(page)
        
        res.header('X-Total-Count', payload.countPage['count(*)'])
        return res.json(payload.result)
    },

    async create (req, res) {
        const data = req.body
        const id = req.headers.authorization

        const result = await service.create(data, id)

        return res.json(result)
    },

    async delete(req, res) {
        const { id } = req.params
        const ong_id = req.headers.authorization
        const result = await service.delete(id, ong_id)

        if(result.error) {
            const { status, error } = result 
            return res.status(status).json(error)
        }
        return res.status(result.status).send()
    }
}