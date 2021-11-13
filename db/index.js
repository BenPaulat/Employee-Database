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

    addDepartment(dept) {
        return this.connection.promise().query(
            'INSERT INTO department SET ?', dept
        )
    }

    removeDepartment(dept) {
        return this.connection.promise().query(
            'DELETE FROM department WHERE name = ?', dept
        )
    }
};

module.exports = new Db(connection);