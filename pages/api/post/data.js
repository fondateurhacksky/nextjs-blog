import { createConnection } from "mysql2";

var connection = createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Lfn2.2rast',
    database : 'myhouse'
  });



export default function handler(req, res) {

       if(req.method === 'GET' && req.query){

        const id = req.query.id;
        connection.query(`SELECT * FROM clients WHERE id="${id}"`,
        (err, results) => {
           if (err){;
             res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des données' });
             console.log(err);
           } else {
             res.end(JSON.stringify(results[0]));
           }
         });
        }else{
          console.log('errore')
         }
}