import nextConnect from 'next-connect';
import multer from 'multer';
import { createConnection } from "mysql2";
const path = require('path');
const process = require('process');
const fs = require('fs');

const date = new Date();
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
  const raison = body.jobType ?  body.jobType : body.city;
  if (req.file && req.file.path) {
    const ex = path.parse(req.file.originalname).ext;
    const newname = `IMG-${date.getFullYear()}${date.getMonth()}${date.getDay()}-HAK${date.getSeconds()}${date.getMilliseconds()}${ex}`;
    const newpath = `${paths}\\${newname}`;
    connection.query(`INSERT INTO clients VALUES 
    (NULL, "${body.nom}", "${body.prenom}", "${body.dateDeNaissance}", 
    "${`${body.lieuDeNaissance}`}", "${body.numeroDeTelephone}", 
    "${body.codeTuteur}", "${newname}", "${body.choice}", 
    "${raison}", "${body.details}", NULL)`,
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
