import { connectionPool } from '../ers-util/connection.util';
import { PoolClient } from 'pg';
import { ReimbursementStatus } from '../ers-models/reimbursementStatus';


export async function findAll() {
    console.log('finding all users');
    let client: PoolClient;
    try {
        client = await connectionPool.connect(); // basically .then is everything after this
        const result = await client.query('SELECT * FROM reimbursementStatus');
        // convert result from sql object to js object
        return result.rows.map(sqlStatus => new ReimbursementStatus(sqlStatus.statusId, sqlStatus.status));
    } catch (err) {
        console.log(err);
    } finally {
        client && client.release();
    }
    console.log('found all');
    return undefined;
}
