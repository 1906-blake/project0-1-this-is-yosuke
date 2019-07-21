import User from '../models/user';

export function convertSqlUser(row: any) {
    return new User(row.user_id, row.username, '', row.first_name, row.last_name, row.email, row.role);
}