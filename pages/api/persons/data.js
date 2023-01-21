import { createConnection } from "mysql2";

var connection = createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Lfn2.2rast',
    database : 'myhouse'
  });


export default function handler(req, res) {
    if(req.method === 'GET' && JSON.stringify(req.query) === "{}"){
      connection.query('SELECT * FROM clients WHERE status="VALIDE"',
      (err, results) => {
         if (err){;
           res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des données' });
           console.log(err);
         } else {
           res.end(JSON.stringify(results));
         }
       });
    }else if(req.method === 'GET' && JSON.stringify(req.query) !== "{}"){

      let age = req.query.age;
      let sexe = req.query.gender;
      let salary = req.query.salary;
      console.log(salary);
      let ageValue;
      switch(age){
          case '18-24' :
          ageValue =  `BETWEEN 18 AND 24`;
          break;
          case '25-34' :
            ageValue =  `BETWEEN 25 AND 34`;
            break;
          case '35-44' :
            ageValue = `BETWEEN 35 AND 50`;
          break;
          default:
            ageValue = `BETWEEN 18 AND 50`;
      }
    
      let salaryValue;
      switch(salary){
        case '< 30 000' :
        salaryValue =  `< 30000`;
        break;
        case '30 000 - 50 000' :
          salaryValue =  `BETWEEN 30000 AND 50000`;
          break;
        case '50 0000 - 80 0000' :
          salaryValue = `BETWEEN 500000 AND 800000`;
        break;
        case '80 0000-100k':
          salaryValue = `BETWEEN 800000 AND 100000`;
          break;
        case '> 100k':
          salaryValue =  `> 100000`;
        break;
        default:
          salaryValue = `> 20000`;
    }

      let sexeValue;
      switch(sexe){
        case 'M' :
          sexeValue =  `"M"`;
          break
        case 'F' :
          sexeValue = `"F"`;
        break;
        default:
          sexeValue =  `"F" OR sexe = "M"`;
    }


    connection.query(`SELECT * FROM clients WHERE status="VALIDE" AND salaire_proposer ${salaryValue} AND sexe = ${sexeValue} AND age ${ageValue}`,
   (err, results) => {
      if (err){;
        res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des données' });
        console.log(err);
      } else {
        res.end(JSON.stringify(results));
      }
    });
     
    }else{
         res.status(500);
    }
  }