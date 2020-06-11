import mysql from 'mysql';

const con = mysql.createConnection({
    host: "khoun.spicerack.dreamhost.com",
    user: "dbusertesttesla",
    password: "prodo123"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});