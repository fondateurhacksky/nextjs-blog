import nextConnect from 'next-connect';
import multer from 'multer';
import { createConnection } from "mysql2";
const path = require('path');
const process = require('process');

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
  console.log(req);
  console.log(paths);
  const raison = body.jobType ?  body.jobType : body.city;
  if (req.file && req.file.path) {
    connection.query(`INSERT INTO clients VALUES 
    (NULL, "${body.nom}", "${body.prenom}", "${body.dateDeNaissance}", 
    "${`${body.lieuDeNaissance}`}", "${body.numeroDeTelephone}", 
    "${body.codeTuteur}", "${req.file.originalname}", "${body.choice}", 
    "${raison}", "${body.details}")`,
      function(err, results, fields) {
        if (err) throw err;
        res.status(200);
      }
  )

  } else {
    
    res.status(500);
  }
});


export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};

export default apiRoute;
