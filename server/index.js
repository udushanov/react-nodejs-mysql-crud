import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "5130921a",
  database: "test",
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("hello backend");
});

app.get("/books", (req, res) => {
  db.query("SELECT * FROM books", (err, data) => {
    if (err) return res.json(data);
    return res.json(data);
  });
});

app.post("/books", (req, res) => {
  const values = [req.body.title, req.body.desc, req.body.price, req.body.cover];
  db.query(
    "INSERT INTO books (`title`, `desc`, `price`,`cover`) VALUES (?)",
    [values],
    (err, data) => {
      if (err) return res.json(err);
      return res.json("Book has been created succesfully");
    }
  );
});

/* checking with postman 
new hhtp request
method: post, address: 'localhost:8800/books'

to check post method from user
method: post, Body raw JSON
in body we should write our json
{
  "title": "title from client",
  "desc": "desc from client",
  "cover": "cover from client"
}

app.use(express.json()) //allows us to send method post from user (sending json file from cilent)
*/

app.delete('/books/:id', (req, res) => {

})

app.listen(8800, () => {
  console.log("The server is running");
});
