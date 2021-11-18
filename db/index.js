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
            'SELECT employees.id, employees.first_name, employees.last_name, role.title as title, department.name as department, employees.manager_id FROM employees LEFT JOIN role ON role.department_id = department.id;'
        )
    }

    addDepartment(dept) {
        return this.connection.promise().query(
            'INSERT INTO department SET ?', dept
        )
    }

    addRole(title, salary, department) {
        return this.connection.promise().query(
            'INSERT INTO role SET ?'
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