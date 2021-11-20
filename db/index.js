const connection = require('./connection');

class Db {
    constructor(connection) {
        this.connection = connection;
    };

    findAllDepartment() {
        return this.connection.promise().query(
            'SELECT department.id, department.name FROM department'
        )
    }

    findAllRoles() {
        return this.connection.promise().query(
            'SELECT role.id, role.title, department.name as department, role.salary FROM role LEFT JOIN department ON role.department_id = department.id;'
        )
    }

    findAllEmployees() {
        return this.connection.promise().query(
            'SELECT employees.id, employees.first_name, employees.last_name, role.title AS title, department.name AS department, role.salary AS salary, CONCAT (manager.first_name, " ", manager.last_name) AS manager FROM employees LEFT JOIN role ON employees.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employees manager ON employees.manager_id = manager.id;'
        )
    }

    addDepartment(dept) {
        return this.connection.promise().query(
            'INSERT INTO department SET ?', dept
        )
    }

    addRole(title, salary, department) {
        console.log();
        return this.connection.promise().query(
            "INSERT INTO role (title, salary, department_id) VALUES (?, ?, (SELECT id FROM department WHERE name = ?))", [title, salary, department]
        )
    }

    addEmployee(first_name, last_name, role, managerId) {
        return this.connection.promise().query(
            `INSERT INTO employees (first_name, last_name, role_id, manager_id) 
            VALUES ('?', '?', (SELECT id FROM role WHERE title = '?'), ${managerId};`, [first_name, last_name, role]
        ) 
    }

    updateEmployee(role, firstName, lastName) {
        return this.connection.promise().query(
            `UPDATE employees SET role_id = (SELECT id FROM role WHERE title = '?') WHERE CONCAT (first_name, ' ', last_name) = '${firstName} ${lastName}';`, role
        )
    }

    removeDepartment(dept) {
        return this.connection.promise().query(
            'DELETE FROM department WHERE name = ?', dept
        )
    }

    departmentList() {
        return this.connection.promise().query(
            'SELECT department.name FROM department;'
        )
    }

    employeeList() {
        return this.connection.promise().query(
            'SELECT CONCAT (id, " ", first_name, " ", last_name) AS employee_name FROM employees;'
        )
    }

    roleList() {
        return this.connection.promise().query(
            'SELECT title FROM role;'
        )
    }
};

module.exports = new Db(connection);