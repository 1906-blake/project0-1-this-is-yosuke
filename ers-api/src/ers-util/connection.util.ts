import { Pool } from 'pg';

const connectionConfiguration = {
    user: 'postgres',
    host: process.env.REIMBURSEMENT_DB_URL || 'localhost',
    database: 'ers_api',
    password: '#1Psychic!',
    port: +process.env.REIMBURSEMENT_DB_PORT || 5432,
    max: 5
};
 console.log(connectionConfiguration);
export const connectionPool = new Pool(connectionConfiguration);