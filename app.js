
import express from 'express'
const express = require('express');
import user from './database.json' with { type: 'json' }
const user = require('./database.json');
const app = express();
const port = 3000;
const router = express.Router();

router.get('/user', (req, res) => {
  res.json(user);
});
app.use('/api', router);
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
}); 


app.use(express.json());
router.get('/', (req, res) => {
  res.send('Hello World!');
});
router.post('/user', (req, res) => {
  res.send('User created!');
});
            
import knex from 'knex'
const knexInstance = knex({
  client: 'mysql3',
  connection: {
    host: '127.0.0.1',
    port: 3306,
    user: 'your_database_user',
    password: 'your_database_password',
    database: 'hyf_node_week1'
  }
})
app.get('/info', async (req, res) => {
  const [rows] = await knexInstance.raw('SELECT VERSION()')
  res.json({ nodeversion: process.version, 
    mysqlversion: rows[0]['VERSION()'] })
}
)









