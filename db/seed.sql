USE employee;

INSERT INTO department
(name)
VALUES
('Engineering'), ('Management'), ('Custodian');

INSERT INTO role
(title, salary, department_id)
VALUES
('Manager', 60000, 12)