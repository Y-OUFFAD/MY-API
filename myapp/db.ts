var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'myIRC',
});

connection.connect();

connection.query('SELECT * users from users;', function(err, rows, fields) {
  if (err){
    throw err;
  } 
  
  else {
    console.log('The solution is: ', rows[0].solution);
    return db.ts 

  }
  
});

connection.end();

