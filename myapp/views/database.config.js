module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "123456",
    DB: "database",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };

  app.get ('/' , (re, res) => {
    return rest.json("From myIRC"); 
  })
  
  app.get('user' , (req, res) =>{
    const sql = "SELECT * FROM users";
    database.query(sql, (err, data)=> {
      if (err) return package.json(err);
      return package.json (data);
    })
  })