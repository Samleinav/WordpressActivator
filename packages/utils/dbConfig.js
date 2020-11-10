var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'key_checker',
  password : '123456',
  database : 'wp_mascotas'
});

module.exports =connection;
