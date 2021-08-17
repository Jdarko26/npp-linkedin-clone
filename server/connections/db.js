const mysql = require('mysql');

//create db connection

const db = mysql.createConnection({

    host: "localhost",
    user: "root",
    port: 3306,
    password: "",
    database: "nppportaldb"

});

db.connect((err) => {

    if (err) throw err;git 
    console.log("MySql connected....");
});

module.exports = db;