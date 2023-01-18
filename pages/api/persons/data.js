import { createConnection } from "mysql2";

var connection = createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Lfn2.2rast',
    database : 'myhouse'
  });


export default function handler(req, res) {
    if(req.method === 'GET' && req.url === '/api/persons/data'){
    connection.query('SELECT * FROM clients',
     (err, results) => {
        if (err){;
          res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des données' });
        } else {
          res.end(JSON.stringify(results));
        }
      });
    }else{
        res.status(500);
    }
  }