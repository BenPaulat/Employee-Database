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
            'SELECT role.id, role.title, role.salary FROM role'
        )
    }

    findAllEmployees() {
        return this.connection.promise().query(
            ''
        )
    }

    addDepartment(dept) {
        return this.connection.promise().query(
            'INSERT INTO department SET ?', dept
        )
    }

    addRole(role) {
        return this.connection.promise().query(
            'INSERT INTO role SET ?', role
        )
    }

    addEmployee(employee) {
        return this.connection.promise().query(
            'INSERT INTO employee SET ?', employee
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