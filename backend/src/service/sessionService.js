const connection = require('../database/connection')

module.exports = {
    async create(data) {
        const {
            id
        } = data

        const result = await connection('ongs')
            .where('id', id)
            .select('name')
            .first()

        if (!result) {
            return {
                status: 400,
                error: 'No ONG found with this ID'
            }
        }

        return result
    }
}