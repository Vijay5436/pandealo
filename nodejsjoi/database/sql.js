const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'vijaytest',
});
connection.connect((err) => {
  if (err) throw err;
  console.log('connected');
});
module.exports = connection;
