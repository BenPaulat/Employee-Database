const mySQL = require('mysql2');
const connection = mySQL.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database: 'employee'
});

connection.connect(function(err) {
    if (err) throw err
});

module.exports = connection