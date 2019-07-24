CREATE TABLE user_role (
	role_id SERIAL PRIMARY KEY,
	role_type TEXT UNIQUE NOT NULL,
);

CREATE TABLE app_user (
	user_id SERIAL PRIMARY KEY,
	username TEXT UNIQUE NOT NULL,
	pass TEXT NOT NULL,
	first_name TEXT NOT NULL,
	last_name TEXT NOT NULL,
	email TEXT NOT NULL,
	role_id INTEGER REFERENCES user_role(role_id)
);

CREATE TABLE reimbursement_status (
    status_id INTEGER PRIMARY KEY,
    status_name TEXT UNIQUE NOT NULL 
);

CREATE TABLE reimbursement_type (
    type_id INTEGER PRIMARY KEY,
    type_name TEXT UNIQUE NOT NULL
)

CREATE TABLE reimbursement (
	reimbursement_id SERIAL PRIMARY KEY,
	author INTEGER REFERENCES app_user(user_userId) NOT NULL,
	amount numeric(8, 2) NOT NULL,
	date_submitted NUMERIC (14, 0) NOT NULL,
    date_resolved NUMERIC (14, 0),
    description TEXT NOT NULL,
    resolver INTEGER REFERENCES app_user(userId),
    status_id INTEGER REFERENCES reimbursement_status(status_id) NOT NULL,
    type_id INTEGER REFERENCES reimbursement_type(type_id)
);

