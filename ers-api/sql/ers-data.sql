INSERT INTO user_role (role_type) VALUES 
('employee'), ('admin'), ('finance manager');

INSERT INTO reimbursement_type (type_name)
VALUES ('travel'), ('food'), ('other'), ('lodging');

INSERT INTO reimbursement_status (status_name)
VALUES ('resolved'), ('pending'), ('denied');

INSERT INTO app_user (username, pass, first_name, last_name, email, role_id)
VALUES  ('dummy1', 'pass', 'dummy', 'one', 'dummy.one@revature.com', 7),
        ('dummy2', 'pass', 'dummy', 'two', 'dummy.two@revature.com', 8),
        ('billyG', 'pass', 'bill', 'gates', 'bill.gates@notrevature.com', 9),
        ('bpkruppa', 'pass', 'blake', 'kruppa', 'blake.kruppa@revature.com', 7),
        ('honestabe', 'pass', 'abe', 'lincoln', 'abe.lincoln@gmail.com', 9),
        ('mchief', 'pass', 'master', 'chief', 'master.chief@yahoo.com', 8),
        ('will', 'pass', 'willy', 'wanka', 'willy.wanka@gmail.com', 7); 



INSERT INTO reimbursement (author, amount, date_submitted, date_resolved, description, resolver, status_id, type_id)
VALUES (22, 500, 20181004, 20181110, 'lunch', 26, 7, 10),
        (25, 1300, 20181223, 20181230, 'Limo rental', 24, 9, 9),
	(28, 500, 20190310, 20190416, 'Banquet', 26, 7, 10)

