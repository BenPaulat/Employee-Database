USE employee;

INSERT INTO department 
(name)
VALUES
('Management'), ('Shipping'), ('Accounting'), ('Medical'), ('Engineering'), ('Janitorial');

INSERT INTO role
(title, salary, department_id)
VALUES
('CEO/Manager', 150000, 1), ('Delivery Boy', 40000, 2), ('Delivery Captain', 45000, 2), ('Assistant Delivery Unit', 40000, 2), ('Accountant', 65000, 3), ('Staff Doctor', 10000, 4), ('Intern', 40000, 5), ('Janitor', 35000, 6);

INSERT INTO employees
(first_name, last_name, role_id, manager_id)
VALUES
('Philip', 'Fry', 2, 10), ('Turanga', 'Leela', 2, 10), ('Bender', 'Rodriguez', 2, 10), ('Amy', 'Wong', 5, 10), ('Hermes', 'Conrad', 3, 10), ('Hubert', 'Farnsworth', 1, NULL), ('John', 'Zoidberg', 4, 10), ('Scruffy', 'Scruffington', 6, 10);