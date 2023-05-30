import { db } from '../database';
import  Boom  from '@hapi/boom';

export const getListingRoute = {
    method: 'GET',
    path: '/api/listings/{id}',
    handler: async (req, res) => {
        const id = req.params.id;
        const { results } = await db.query('SELECT * FROM listings WHERE id=?', [id]);
        const list = results[0]
        if (!list) throw Boom.notFound(`Listing doen's exist with id ${id}`);
        return list;
    }
}