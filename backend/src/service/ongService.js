const crypto = require('crypto')
const connection = require('../database/connection')

module.exports = {
    async index () {        
        const result = await connection('ongs').select('*')

        return result
    },

    async create (data) {
        const { name, email, whatsapp, city, uf } = data

        const id = crypto.randomBytes(4).toString('HEX')
        
        await connection('ongs').insert({
            id,
            name, 
            email, 
            whatsapp, 
            city, 
            uf
        })

        return { id }
    }

}