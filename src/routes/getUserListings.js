import { db } from "../database";
import  Boom  from '@hapi/boom';

export const getUserListingsRoute = {
    method: 'GET',
    path: '/api/users/{userId}/listings',
    handler: async (req, res) => {
        const userId = req.params.userId;
        const { results } = await db.query('SELECT * FROM listings WHERE user_id=?', [userId]);
        if (!results[0]) throw Boom.notFound(`User doent's exist with id ${userId}`);
        return results;
    }
}