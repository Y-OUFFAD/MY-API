// const mysql  = require('mysql'); 
import mysql from 'mysql'
require('dotenv').config({path: __dirname +'/.env'})
console.log( process.env.DB_HOST);
var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});
connection.connect (function(err) {
  if (err) throw err;
  console.log ("connected");
});





// connection.query(
//     'SELECT * FROM `table`',
//     function(err, results, fields) {
//         if (err) console.log (err);
//         console.log(results);       
//     }
//   );


async function gettablename(connection) {

        const [result] = await connection.query('SELECT * FROM users')
        console.log (result)


  }

  gettablename(connection)
  
