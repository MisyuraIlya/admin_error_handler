import mysql from 'mysql';

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'admin_error',
});

export default db;