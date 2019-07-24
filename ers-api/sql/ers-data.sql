INSERT INTO user_role (role_type) VALUES 
('employee'), ('admin'), ('finance manager');

INSERT INTO reimbursement_type (type_name)
VALUES ('travel'), ('food'), ('other'), ('lodging');

INSERT INTO reimbursement_status (status_name)
VALUES ('resolved'), ('pending'), ('denied');

INSERT INTO app_user (username, pass, first_Name, lastname, email, role_id)
VALUES  ('dummy1', 'pass', 'dummy', 'one', 'dummy.one@revature.com', 1),
        ('dummy2', 'pass', 'dummy', 'two', 'dummy.two@revature.com', 2),
        ('billyG', 'pass', 'bill', 'gates', 'bill.gates@notrevature.com', 3),
        ('bpkruppa', 'pass', 'blake', 'kruppa', 'blake.kruppa@revature.com', 1),
        ('honestabe', 'pass', 'abe', 'lincoln', 'abe.lincoln@gmail.com', 3),
        ('mchief', 'pass', 'master', 'chief', 'master.chief@yahoo.com', 2),
        ('will', 'pass', 'willy', 'wanka', 'willy.wanka@gmail.com', 1); 



INSERT INTO reimbursement (author, amount, date_submitted, date_resolved, description, resolver, status_id, type_id)
VALUES (3, 500, 1563584376049, 1563584376153, 'lunch', 1, 3, 4),
        (3, 25, 1533584376040, 1563584376143, 'gas', 1, 2, 1);



