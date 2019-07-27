import { PoolClient } from 'pg';
import { connectionPool } from '../util/connection.util';
import { reimbursementConverter } from '../util/reimbursement.converter';
import Reimbursement from '../models/reimbursement';

export async function submitReimburse(reimbursement: Reimbursement) {
    let client: PoolClient;
    try {
        client = await connectionPool.connect(); // basically .then is everything after this
        const queryString = `
            INSERT INTO reimbursement (author, amount, date_submitted, description, resolver, status_id, type_id)
            VALUES 	($1, $2, $3, $4, $5, $6, $7)
            RETURNING reimbursement_id;
        `;
        const params = [reimbursement.author, reimbursement.amount, reimbursement.dateSubmitted, reimbursement.description, reimbursement.resolver, reimbursement.status, reimbursement.type];
        const result = await client.query(queryString, params);
        reimbursement.reimbursementId = reimbursementConverter(result.rows[0]).reimbursementId;
        return reimbursement;
    } catch (err) {
        console.log(err);
    } finally {
        client && client.release();
    }
    console.log('found all');
    return undefined;
}
// const params = [reimbursement.author.id, reimbursement.amount, reimbursement.dateSubmitted, reimbursement.description, reimbursement.resolver.id, reimbursement.status.statusId, reimbursement.type.typeId];

export async function findByUserId(authorId: number) {
    let client: PoolClient;
    try {
        client = await connectionPool.connect();
        const queryString = `
        SELECT r.reimbursement_id, rt.type_name, rs.status_name, author.user_id AS author_user_id,
        author.username AS author_username, author.pass AS author_pass, author.first_name AS author_first_name,
        author.last_name AS author_last_name, author.email AS author_email, author.role_id AS author_role_id,
        ar.role_type AS author_role_type, resolver.user_id AS resolver_user_id,
        resolver.username AS resolver_username, resolver.pass AS resolver_pass,
        resolver.first_name AS resolver_first_name, resolver.last_name AS resolver_last_name,
        resolver.email AS resolver_email, resolver.role_id AS resolver_role_id,
        rr.role_type AS resolver_role_type, amount, date_submitted, date_resolved, description

            FROM reimbursement AS r
            LEFT JOIN reimbursement_type AS rt USING (type_id)
            INNER JOIN reimbursement_status AS rs USING (status_id)
            INNER JOIN app_user AS author ON (r.author = author.user_id)
            INNER JOIN user_role AS ar ON (ar.role_id = author.role_id)
            LEFT JOIN app_user AS resolver ON (r.resolver = resolver.user_id)
            INNER JOIN user_role AS rr ON (rr.role_id = resolver.role_id)
            WHERE author = $1
            ORDER BY date_submitted ASC`;
        const result = await client.query(queryString, [authorId]);
        // convert result from sql object to js object
        const sqlResult = result.rows[0];
        console.log(sqlResult);
        return reimbursementConverter(sqlResult);
    } catch (err) {
        console.log(err);
    } finally {
        client && client.release();
    }
    console.log('found all');
    return undefined;
}

export async function findById(reimbursementId: number) {
    let client: PoolClient;
    try {
        client = await connectionPool.connect();
        const queryString = `
       SELECT r.*, rt.type_name, rs.status_name, author.user_id AS author_user_id, author.username AS author_username, author.pass AS author_pass, author.first_name AS author_first_name, author.last_name AS author_last_name, author.email AS author_email, author.role_id AS author_role_id, ar.role_type AS author_role_type,
        resolver.user_id AS resolver_user_id, resolver.username AS resolver_username, resolver.pass AS resolver_pass, resolver.first_name AS resolver_first_name, resolver.last_name AS resolver_last_name, resolver.email AS resolver_email, resolver.role_id AS resolver_role_id, rr.role_type AS resolver_role_type

            FROM reimbursement AS r
            JOIN reimbursement_type AS rt USING (type_id)
            JOIN reimbursement_status AS rs USING (status_id)
            JOIN app_user AS author ON (author = author.user_id)
            JOIN user_role AS ar ON (ar.role_id = author.role_id)
            JOIN app_user AS resolver ON (resolver = resolver.user_id)
            JOIN user_role AS rr ON (rr.role_id = resolver.role_id)
            WHERE reimbursement_id = $1`;
        const result = await client.query(queryString, [reimbursementId]);
        // convert result from sql object to js object
        const sqlResult = result.rows[0];
        return reimbursementConverter(sqlResult);
    } catch (err) {
        console.log(err);
    } finally {
        client && client.release();
    }
    console.log('found all');
    return undefined;
}


export async function findReimburseByStatusId(status_id: number) {
    let client: PoolClient;
    try {
        client = await connectionPool.connect();
        console.log('here');
        client = await connectionPool.connect(); // basically .then is everything after this
        const queryString = `
        SELECT r.reimbursement_id, rt.type_name, rs.status_name, author.user_id AS author_user_id,
        author.username AS author_username, author.pass AS author_pass, author.first_name AS author_first_name,
        author.last_name AS author_last_name, author.email AS author_email, author.role_id AS author_role_id,
        ar.role_type AS author_role_type, resolver.user_id AS resolver_user_id,
        resolver.username AS resolver_username, resolver.pass AS resolver_pass,
        resolver.first_name AS resolver_first_name, resolver.last_name AS resolver_last_name,
        resolver.email AS resolver_email, resolver.role_id AS resolver_role_id,
        rr.role_type AS resolver_role_type, amount, date_submitted, date_resolved, description
             FROM reimbursement AS r
             LEFT JOIN reimbursement_type AS rt USING (type_id)
             INNER JOIN reimbursement_status AS rs USING (status_id)
             INNER JOIN app_user AS author ON (r.author = author.user_id)
             INNER JOIN user_role AS ar ON (ar.role_id = author.role_id)
             LEFT JOIN app_user AS resolver ON (r.resolver = resolver.user_id)
             INNER JOIN user_role AS rr ON (rr.role_id = resolver.role_id)
             WHERE status_id = $1`;
        const result = await client.query(queryString, [status_id]);
        const sqlResult = result.rows[0];
        console.log(sqlResult);
        return reimbursementConverter(sqlResult);
    } catch (err) {
        console.log(err);
    } finally {
        client && client.release();
    }
    console.log('User found by Status Id');
    return undefined;
}

export async function updateReimburse(reimbursement: Reimbursement): Promise<Reimbursement> { // promise to return single user
    console.log(reimbursement);
    const oldReimbursement = await findById(reimbursement.reimbursementId); // reimbursement object has reimbursementId
    console.log(oldReimbursement);
    if (!oldReimbursement) {
        return undefined;
    }
    reimbursement = { // holding old user info and replacing with new user info
        ...oldReimbursement, // spread operator
        ...reimbursement // all the new updated info of the user
    };
    let client: PoolClient; // the max 5 from the user connection utility
    console.log(reimbursement);
    try {
        client = await connectionPool.connect(); // beginning the connection
        // removes from the stack until the connection is made then it contnues the function
        const queryString = `UPDATE reimbursement
        SET author = $1,
            amount = $2,
            date_submitted = $3,
            date_resolved = $4,
            description =  $5,
            resolver = $6,
            status_id = $7,
            type_id =$8
        WHERE reimbursement_id = $9`;
        const constraints = [reimbursement.author.id, reimbursement.amount, reimbursement.dateSubmitted, reimbursement.dateResolved,
        reimbursement.description, reimbursement.resolver.id, reimbursement.status.statusId, reimbursement.type.typeId, reimbursement.reimbursementId];

        await client.query(queryString, constraints); // makes sure the reimbursement is updated
        return reimbursement; // only return reimbursement results in converted format
        // console log the error to see what it is if it exist
    } catch (err) { // console log the error to see what it is
        console.log(err);
    } finally {
        client && client.release();
    }
    return undefined;
}