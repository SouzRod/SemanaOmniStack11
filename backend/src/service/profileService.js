const connection = require('../database/connection')

module.exports = {
    async index (ong_id) {        
        const result = await connection('incidents')
            .where('ong_id', ong_id)
            .select('*')

        return result
    }
}