import express from 'express'
import mysql from 'mysql'

const app = express()

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test'
})

app.get('/', (req, res) => {
  res.json('hello backend')
})

app.listen(8800, () => {
  console.log('The server is running')
})