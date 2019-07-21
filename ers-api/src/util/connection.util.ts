import { Pool } from 'pg';

const connectionConfiguration = {
    user: process.env.REIMBURSEMENT_DB_USERNAME,
    host: process.env.REIMBURSEMENT_DB_URL || 'localhost',
    database: process.env.REIMBURSEMENT_DB_NAME || 'ers_api',
    password: process.env.REIMBURSEMENT_DB_PASSWORD,
    port: +process.env.REIMBURSEMENT_DB_PORT || 5432,
    max: 5
}
// console.log(connectionConfiguration);
export const connectionPool = new Pool(connectionConfiguration)