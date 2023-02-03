import nextConnect from 'next-connect';
import multer from 'multer';
import { createConnection } from "mysql2";
const path = require('path');
const process = require('process');
const fs = require('fs');
import { parseISO, differenceInCalendarYears } from 'date-fns';

const today = new Date();
const dateString = today.toISOString().slice(0,10);
const paths = path.join(`${process.cwd()}`, '\\public\\images\\clients')
var connection = createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Lfn2.2rast',
  database : 'myhouse'
});

const upload = multer({
  storage: multer.diskStorage({
    destination: paths,
    filename: (req, file, cb) => cb(null, file.originalname),
  }),
});

const apiRoute = nextConnect({
  // Handle any other HTTP method
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

const uploadMiddleware = upload.single('photoDeProfil');

apiRoute.use(uploadMiddleware);

apiRoute.post((req, res) => {
  const body = req.body;
  const id = `${body.nom.toLowerCase()}_${body.prenom.toLowerCase()}_${Math.floor(Math.random()*10000)}`
  const raison = body.jobType ?  body.jobType : body.city;
  if (req.file && req.file.path) {
    var age = differenceInCalendarYears(new Date(), parseISO(body.dateDeNaissance));
    const ex = path.parse(req.file.originalname).ext;
    const newname = `IMG-${dateString}-${today.getSeconds()}${today.getMilliseconds()}-HAK${Math.floor(Math.random()*10000)}${ex}`;
    const newpath = `${paths}\\${newname}`;
    console.log(age);
    connection.query(`INSERT INTO personnes VALUES 
    ("${id}", "${body.nom}", "${body.prenom}", "${body.dateDeNaissance}",
    "${`${body.lieuDeResidance}`}", "${body.numeroDeTelephone}", 
    "${body.codeTuteur}", "${newname}",'${body.jobType}', "${body.details}")`,
      function(err, results, fields) {
        if (err) throw err;
        fs.rename(req.file.path, newpath,(err)=>{
            if (err) throw err;
            res.status(200);
            res.end();
        })
      }
  )
  } else {
    
    res.status(500);
  }
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apiRoute;
