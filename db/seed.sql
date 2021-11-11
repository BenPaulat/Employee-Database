USE employee;

INSERT INTO department
(name)
VALUE
('Engineering'), ('Management'), ('Custodian');

INSERT INTO role
(title, salary, department_id)
VALUE
('Manager', 60000, 12), 