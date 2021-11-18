USE employee;

INSERT INTO department 
(name)
VALUES
('Management'), ('Delivery'), ('Accounting'), ('Medical'), ('Engineering'), ('Janitorial');

INSERT INTO role
(title, salary, department_id)
VALUES
('CEO/Manager', 150000, 1), ('Delivery Boy', 40000, 2), ('Delivery Captain', 45000, 2), ('Assistant Delivery Unit', 40000, 2), ('Accountant', 65000, 3), ('Staff Doctor', 10000, 4), ('Intern', 40000, 5), ('Janitor', 35000, 6);

INSERT INTO employees
(first_name, last_name, role_id, manager_id)
VALUES
('Hubert', 'Farnsworth', 1, NULL), ('Philip', 'Fry', 2, 1), ('Turanga', 'Leela', 2, 1), ('Bender', 'Rodriguez', 2, 1), ('Amy', 'Wong', 5, 1), ('Hermes', 'Conrad', 3, 1), ('John', 'Zoidberg', 4, 1), ('Scruffy', 'Scruffington', 6, 1);