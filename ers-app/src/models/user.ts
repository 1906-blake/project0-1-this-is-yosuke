import Role from './role';

export default class User {
    constructor(
    public id = 0, // primary key
    public username = '', // not null, unique
    public password = '', // not null
    public firstName = '', // not null
    public lastName = '', // not null
    public email = '', // not null
    public role = new Role() // not null
    ) {}
}