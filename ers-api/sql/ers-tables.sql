CREATE TABLE user_role (
	role_id SERIAL PRIMARY KEY,
	role_type TEXT NOT NULL  UNIQUE
);

CREATE TABLE app_user (
	user_id SERIAL PRIMARY KEY,
	username TEXT NOT NULL UNIQUE ,
	pass TEXT NOT NULL,
	first_name TEXT NOT NULL,
	last_name TEXT NOT NULL,
	email TEXT NOT NULL,
	role_id INTEGER REFERENCES user_role(role_id)
);

CREATE TABLE reimbursement_status (
    status_id SERIAL PRIMARY KEY,
    status_name TEXT NOT NULL UNIQUE 
);

CREATE TABLE reimbursement_type (
    type_id SERIAL PRIMARY KEY,
    type_name TEXT NOT NULL UNIQUE
);

CREATE TABLE reimbursement (
	reimbursement_id SERIAL PRIMARY KEY,
	author INTEGER REFERENCES app_user(user_Id) NOT NULL,
	amount numeric(8, 2) NOT NULL,
	date_submitted INTEGER NOT NULL,
    date_resolved INTEGER,
    description TEXT NOT NULL,
    resolver INTEGER REFERENCES app_user(user_Id),
    status_id INTEGER REFERENCES reimbursement_status(status_id) NOT NULL,
    type_id INTEGER REFERENCES reimbursement_type(type_id)
);

