const connection = require('../database/connection')

module.exports = {
    async index(page = 1) {

        const [countPage] = await connection('incidents').count()

        const result = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select([
                'incidents.*',
                'ongs.name',
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf'
            ])

        return {
            result,
            countPage
        }
    },

    async create(data, ong_id) {
        const {
            title,
            description,
            value
        } = data

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        })

        return {
            id
        }
    },

    async delete(id, ong_id) {
        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first()

        if (incident.ong_id !== ong_id) {
            return {
                status: 401,
                error: 'Operation not permitted'
            }
        }

        await connection('incidents').where('id', id).delete()

        return {
            status: 204
        }
    }

}