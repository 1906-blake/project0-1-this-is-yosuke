import { PoolClient } from 'pg';
import { connectionPool } from '../util/connection.util'
//import { cardConverter } from '../util/card.converter';
import { reimbursementConverter } from '../util/reimbursement.converter';
import Reimbursement from '../models/reimbursement';


export async function findAll() {
    let client: PoolClient;
    try {
        client = await connectionPool.connect(); // basically .then is everything after this
        const queryString = `
        SELECT * FROM card
        LEFT JOIN app_user USING (user_id)
        INNER JOIN quality USING (quality_id)
        INNER JOIN game USING (game_id)`;
        const result = await client.query(queryString);
        // convert result from sql object to js object
        return result.rows.map(reimbursementConverter);
    } catch (err) {
        console.log(err);
    } finally {
        client && client.release();
    }
    console.log('found all');
    return undefined;
}


export async function save(card: Card) {
    let client: PoolClient;
    try {
        client = await connectionPool.connect(); // basically .then is everything after this
        const queryString = `
            INSERT INTO card (card_name, card_value, game_id, quality_id, user_id)
            VALUES 	($1, $2, $3, $4, $5)
            RETURNING card_id
        `;
        const params = [card.name, card.value, card.game && card.game.id, card.quality && card.quality.id, card.owner && card.owner.id];
        const result = await client.query(queryString, params);
        return result.rows[0].card_id;
    } catch (err) {
        console.log(err);
    } finally {
        client && client.release();
    }
    return undefined;
}

export async function findById(id: number){
    console.log('finding card by id: ' + id);
    let client: PoolClient;
    try {
        client = await connectionPool.connect(); // basically .then is everything after this
        const result = await client.query('SELECT * FROM app_user WHERE card_id = $1', [id]);
        const sqlUser = result.rows[0];
        return sqlUser && convertSqlUser(sqlUser);
    } catch (err) {
        console.log(err);
    } finally {
        client && client.release();
    }
    return undefined;
}
