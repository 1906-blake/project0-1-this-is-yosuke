export class Role {
    constructor(
        public roleId = 0, // primary key
        public role = '' // not null, unique
    ) { }
}