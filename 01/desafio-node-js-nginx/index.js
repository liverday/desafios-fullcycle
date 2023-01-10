require('dotenv').config();
const express = require('express');
const mysql = require('mysql')
const app = express();

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DB,
  ssl: false
})

function main() {
  app.use(express.json());

  app.get('/', (_, res) => {
    connection.query('SELECT name FROM people', (error, results) => {
      if (error) {
        return res.status(400).json({ message: 'Houve um erro' })
      }

      res.setHeader('Content-Type', 'text/html')
        res.send(
          `<h1>Full Cycle</h1>
          ${results.length > 0 ? `<ol>${results.map(row => `<li>${row.name}</li>`).join('\n')}</ol>` : ''}
        `)
    });
  });

  app.post('/people', (req, res) => {
    const { name } = req.body;

    connection.query(`INSERT INTO people VALUES(?)`, [name], (error, _) => {
      if (error) {
        return res.status(400).json({ message: 'Houve um erro' })
      }

      res.json({
        name
      })
    });
  });

  const port = process.env.PORT || 3000;

  app.listen(port, () => {
    console.log(`🚀 ~ Server started at port ${port}`)
  })
}

main();

process.on('SIGTERM', () => {
  console.log('SIGTERM signal received.');
  connection.end();
});