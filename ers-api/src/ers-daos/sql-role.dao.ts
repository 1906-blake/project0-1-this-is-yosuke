import { connectionPool } from '../ers-util/connection.util';
import { PoolClient } from 'pg';
import { Role } from '../ers-models/role';


export async function findAll() {
    console.log('finding all users');
    let client: PoolClient;
    try {
        client = await connectionPool.connect(); // basically .then is everything after this
        const result = await client.query('SELECT * FROM role');
        // convert result from sql object to js object
        return result.rows.map(sqlStatus => new Role(sqlStatus.statusId, sqlStatus.status));
    } catch (err) {
        console.log(err);
    } finally {
        client && client.release();
    }
    console.log('found all');
    return undefined;
}