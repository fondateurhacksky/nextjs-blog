import { Formik, Form, Field } from 'formik';
import Style from '../styles/signup.module.css';
import styles from '../styles/popup.module.css'
import { validationSchema } from './Validationsign';
import { useRef, useState, useEffect } from 'react';
import {handleInput} from './handler';
import Select from 'react-select';
import axios from 'axios';



const SignupWork = () => {
  
  const [jobType, setjobType] = useState([
     { label: 'Nounou', value: 'Nounou' },
     { label: 'Menager', value: 'Menager' },
     { label: 'Autre', value: 'Autre' },
     ]);
  const [job, setJob] = useState('')
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
    formData.append("lieuDeResidance", values.lieuDeResidance);
    formData.append("numeroDeTelephone", values.numeroDeTelephone);
    formData.append("codeTuteur", values.codeTuteur);
    formData.append("photoDeProfil", document.form1.photoDeProfil.files[0]);
    formData.append("jobType", JSON.stringify(job[0]));
    formData.append("details", values.details);

    const config = {
      headers: { 'content-type': 'multipart/form-data' },
    };

    const response = await axios.post('/api/server', formData, config);
    if(response.status === 200){
      let popup = document.querySelector(`.${styles.popup}`);
      popup.classList.add(`${styles.open_popup}`);
      document.form1.style.filter = 'blur(10px)';
    }
  };

  return (
    <Formik
      initialValues={{
        nom: '',
        prenom: '',
        dateDeNaissance: '',
        lieuDeResidance: '',
        numeroDeTelephone: '+225 ',
        codeTuteur: '',
        details: '',
      }}
      validationSchema={validationSchema}
      onSubmit={ (values) => handlerSubmit(values)}
    >

      {({touched, errors}) => (
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
                placeholder="Prenom"
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
                    className={touched.dateDeNaissance && errors.dateDeNaissance ? `${Style.inputError}` : ''}
                     />
                    <span className={Style.divn}>{touched.dateDeNaissance && errors.dateDeNaissance ? errors.dateDeNaissance : ' '}</span>
                </div>

                <div className={Style.ssdata2}>
                  <label htmlFor="lieuDeResidance">Ville de Residance</label>
                  <Field 
                  name="lieuDeResidance" 
                  type="text" 
                  className={touched.lieuDeResidance && errors.lieuDeResidance ? `${Style.inputError}` : ''}
                   />
                  <span className={Style.divn}>{touched.lieuDeResidance && errors.lieuDeResidance ? errors.lieuDeResidance : ' '}</span>
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

          <Select
            isMulti
            name="jobType"
            options={jobType}
            placeholder="Qu'elle type de travaille voulez vous ?"
            className={`${Style.sec} basic-multi-select`}
            classNamePrefix="select"
            onChange={(option) =>setJob(option)}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                borderColor: state.isFocused ? 'grey' : '#4cd137',
                borderWidth: '2px',
                width: '78%',
              }),
              placeholder: (base) => ({
                ...base,
                fontSize: '1em',
                fontWeight: 300,
              }),
            }}
            theme={(theme) => ({
              ...theme,
              borderRadius: 5,
              colors: {
                ...theme.colors,
                primary25: 'hotpink',
                primary: '#3498db',
              },
            })}
          />
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
            <button type="button" onClick={(e) => handleClick2(e) }>prev</button>

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

export default SignupWork