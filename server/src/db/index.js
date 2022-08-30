import mysql from 'mysql';

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Aa123456',
  database: 'admin_error',
});

export default db;