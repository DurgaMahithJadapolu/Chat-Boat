const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.DB_HOST || '127.0.0.1',
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'mahith123',
  database: process.env.DB_NAME || 'chatbot',
});

connection.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.code, err.message);
    return;
  }
  console.log('Database connected successfully!');
});
