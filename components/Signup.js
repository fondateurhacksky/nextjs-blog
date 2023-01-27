import { Formik, Form, Field } from 'formik';
import Style from '../styles/signup.module.css';
import { validationSchema } from './Validationsign';
import { useRef, useState } from 'react';
import {handleInput} from './handler';
import axios from 'axios';



const Signup = () => {
  
  const [city, setCity] = useState([ { label: 'La maison se situe a ? :', value: '' }, { label: 'Abidjan', value: 'Abidjan' }, { label: 'Abouaké', value: 'Abouaké' }, ]);

  const [jobType, setjobType] = useState([ { label: 'Vous voulez travailler comme ? :', value: '' }, { label: 'Nounou', value: 'Nounou' }, { label: 'Menager', value: 'Menager' }, ]);
  
  const btnRef = useRef(null)

  const handleClick = (e) => {
    if(document.form1.photoDeProfil.files.length === 1){
      e.target.style.display = 'none'
      document.querySelector(`.${Style.data}`).style.display = 'none';
      document.querySelector(`.${Style.target}`).style.display = 'none';
      document.querySelector(`.${Style.data2}`).style.display = 'flex';
    }else{
      document.querySelector(`.${Style.preview}`).style.borderColor = 'red'
      document.querySelector(`.${Style.preview}`).style.color = 'red'
    }
  }
  
   const handleClick2 = (e) => {
    btnRef.current.style.display = 'block';
    document.querySelector(`.${Style.data}`).style.display = 'flex';
    document.querySelector(`.${Style.target}`).style.display = 'flex';
    document.querySelector(`.${Style.data2}`).style.display = 'none';
  }

  const handlerSubmit = async (values) => {
    const formData = new FormData();
    formData.append("nom", values.nom);
    formData.append("prenom", values.prenom);
    formData.append("dateDeNaissance", values.dateDeNaissance);
    formData.append("lieuDeNaissance", values.lieuDeNaissance);
    formData.append("numeroDeTelephone", values.numeroDeTelephone);
    formData.append("codeTuteur", values.codeTuteur);
    formData.append("photoDeProfil", document.form1.photoDeProfil.files[0]);
    formData.append("choice", values.choice);
    formData.append("jobType", values.jobType);
    formData.append("city", values.city);
    formData.append("details", values.details);

    const config = {
      headers: { 'content-type': 'multipart/form-data' },
    };

    const response = await axios.post('/api/server', formData, config);

   console.log(response.data);
  };

  return (
    <Formik
      initialValues={{
        nom: '',
        prenom: '',
        dateDeNaissance: '',
        lieuDeNaissance: '',
        numeroDeTelephone: '+225 ',
        codeTuteur: '',
        choice: '',
        jobType: '',
        city: '',
        details: '',
      }}
      validationSchema={validationSchema}
      onSubmit={ (values) => handlerSubmit(values)}
    >

      {({values, touched, errors}) => (
        <Form className={Style.form} name="form1" method='post'>
        <div className={Style.data}>

            <div className={Style.sdata1}>

                <div className={Style.ssdata1}>
                    <Field 
                    name="nom" 
                    type="text"
                    placeholder="Nom"
                    className={touched.nom && errors.nom ? `${Style.inputError}` : ''}
                     />
                    <span className={Style.divn}>{touched.nom && errors.nom ? errors.nom : ' '}</span>
                </div>

              <div className={Style.ssdata1}>
                <Field 
                name="prenom"
                type="text"
                placeholder="prenom"
                className={touched.prenom && errors.prenom ? `${Style.inputError}` : ''}
                  />
                <span className={Style.divn}>{touched.prenom && errors.prenom ? errors.prenom : ' '}</span>
              </div>

            </div>

            <div className={Style.sdata2}>
                                    
                <div className={Style.ssdata2}>
                    <label htmlFor="dateDeNaissance">Date de naissance</label>
                    <Field 
                    name="dateDeNaissance"
                    type="date"
                    placeholder="Prenom"
                    className={touched.dateDeNaissance && errors.dateDeNaissance ? `${Style.inputError}` : ''}
                     />
                    <span className={Style.divn}>{touched.dateDeNaissance && errors.dateDeNaissance ? errors.dateDeNaissance : ' '}</span>
                </div>

                <div className={Style.ssdata2}>
                  <label htmlFor="lieuDeNaissance">Lieu de naissance</label>
                  <Field 
                  name="lieuDeNaissance" 
                  type="text" 
                  className={touched.lieuDeNaissance && errors.lieuDeNaissance ? `${Style.inputError}` : ''}
                   />
                  <span className={Style.divn}>{touched.lieuDeNaissance && errors.lieuDeNaissance ? errors.lieuDeNaissance : ' '}</span>
                </div>

            </div>
            <div className={Style.sdata3}>

                <div className={Style.ssdata3}>
                  <Field 
                  name="numeroDeTelephone" 
                  type="tel"
                  placeholder="Numero de Telephone"
                  className={touched.numeroDeTelephone && errors.numeroDeTelephone ? `${Style.inputError}` : ''}
                   />
                  <span className={Style.divn}>{touched.numeroDeTelephone && errors.numeroDeTelephone ? errors.numeroDeTelephone : ' '}</span>
                </div>

                <div className={Style.ssdata3}>
                  <Field 
                  name="codeTuteur" 
                  type="text"
                  placeholder="Code Tuteur *"
                  className={touched.codeTuteur && errors.codeTuteur ? `${Style.inputError}` : ''}
                   />
                   <span className={Style.divn}>{touched.codeTuteur && errors.codeTuteur ? errors.codeTuteur : ' '}</span>
                </div>
            </div>

            
        </div>
        <div className={Style.target}>
            <div className={Style.starget}>
              <Field
              name="photoDeProfil"
              id="photoDeProfil"
              type="file"
              accept=".jpg, .jpeg, .png"
              onChange={ (e) => handleInput(e)}
              />
               <label 
               className={Style.preview}
               htmlFor="photoDeProfil" 
               >
                    <p>Une Photo de Vous (PNG, JPG, JPEG)</p>
                </label>
            </div>
        </div>

      <div className={Style.data2}>

          <div className={Style.selec}>
              <Field
              as="select"
              name="choice"
              className={touched.choice && errors.choice ? Style.selectError : ''}
              >
              <option value="">-- Vous Souhaiterez ? --</option>
              <option value="rent">Mettre une maison en location</option>
              <option value="work">Trouver du Travailler</option>
              </Field>
            {values.choice === 'rent' && (
              <Field
                name="city"
                as="select"
                className={touched.city && errors.city ? Style.selectError : ''}
              >
                {city.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>))}
                </Field>
                  )}

                {values.choice === 'work' && (
                  <Field
                    name="jobType"
                    as="select"
                    className={touched.jobType && errors.jobType ? Style.selectError : ''}
                  >
                    {jobType.map((item) => (
                      <option key={item.value} value={item.value}>
                        {item.label}
                      </option>))}
                    </Field>
                      )}
            </div>

            <div className={Style.present}>
              <Field
                name="details"
                component="textarea"
                placeholder="Pourriez-vous nous en dire plus sur vous ou sur ce que vous souhaitez partager ?"
                className={`${Style.textarea} ${touched.details && errors.details ? Style.textareaError : ''}`}
                rows={8}
              />
            </div>              
          
          <div className={Style.btns}>
            <button type="button" onClick={(e) => handleClick2(e) } >prev</button>

            <button type="submit" >
              Envoyer
            </button>
          </div>
      </div>

        <button type="button" onClick={(e) => handleClick(e) } ref={btnRef}>Next</button>
        
        </Form>
         )}
    </Formik>
  );
};

export default Signup