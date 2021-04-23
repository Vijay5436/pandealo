const bodyparser = require('body-parser');
const mysql = require('mysql');
const { joischema } = require('../joi/joi');

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
exports.details = async (req, res, next) => {
  const { username, password, emailid } = req.body;
  // const re = joischema.validate(req.body);
  try {
    const value = await joischema.validateAsync(req.body);
    res.send(value);
    const sql = "INSERT into loginjs values('"+username+"','"+password+"','"+emailid+"')";
    connection.query(sql, (err) => {
      if (err) throw err;
      console.log('success....');
    });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};
