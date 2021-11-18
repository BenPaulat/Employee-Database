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
        return this.connection.promise().query(
            "INSERT INTO role (title, salary, department_id) VALUES ('?', ?, (SELECT id FROM department WHERE name = '?'));", title, salary, department
        )
    }

    addEmployee(employee) {
        return this.connection.promise().query(
            'INSERT INTO employees SET ?', employee
        ) 
    }

    updateEmployee() {
        return this.connection.promise().query(
            '', 
        )
    }

    removeDepartment(dept) {
        return this.connection.promise().query(
            'DELETE FROM department WHERE name = ?', dept
        )
    }
};

module.exports = new Db(connection);