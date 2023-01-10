import React from 'react';
import { Formik, Form, Field } from 'formik';
import Style from '../styles/form.module.css';
import { validationSchema } from './validation';

const SignupForm = () => {
  return (
  <Formik
      initialValues={{
        name: '',
        email: '',
        city: '',
        phone: '+225',
        contractType: '',
        contractDuration: '',
        codeTuteur: '',
        salary: '15000',
        accomodation: false,
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => { 
        setTimeout(() => {
          console.log(values);
          setSubmitting(false);
        }, 400);
      }}
    >

      {({isSubmitting, errors, touched }) => (
    <Form className={Style.form}>
  
      <div className={Style.data}>

          <div className={Style.sdata1}>

              <label htmlFor='firstName'>Nom Complet</label>
              <Field 
              type="text" 
              name="name" 
              id='firstName'
              className={touched.name && errors.name ? `${Style.inputError}` : ''}
              />
              <span className={Style.divn}>{touched.name && errors.name ? errors.name : ' '}</span>


              <label htmlFor='city'>Ville de residence</label>
              <Field as="select" name="city" id="city" className={touched.city && errors.city ? `${Style.inputError}` : ''}>
                  <option value="">-- Chosse Your City --</option>
                  <option value="Abidjan">Abidjan</option>
                  <option value="Abidjan">Abidjan</option>
                  <option value="Bouaké">Bouaké</option>
                  <option value="Yamoussokro">Yamoussokro</option>
              </Field>
              <span className={Style.divn}>{touched.city && errors.city ? errors.city : ' '}</span>
                
          </div>

          <div className={Style.sdata2}>

              <label htmlFor='email'>Email *</label>
              <Field 
              type="email" 
              name="email" 
              id="email" 
              className={touched.email && errors.email ? `${Style.inputError}` : '' }
              />
              <span className={Style.divn}>{touched.email && errors.email ? errors.email : ' '}</span>

              <label htmlFor='phone'>Contact</label>
              <Field 
              type="tel" 
              name="phone" 
              id="phone"
              className={touched.phone && errors.phone ? `${Style.inputError}` : '' }
              />
              <span className={Style.divn}>{touched.phone && errors.phone ? errors.phone : ' '}</span>

          </div>

      </div>
    
      <div className={Style.target}>  
              <div className={Style.ssd1}>
                <label htmlFor='codeTuteur'>Code Tuteur *</label>
                <Field 
                type="text" 
                name="codeTuteur" 
                className={touched.codeTuteur && errors.codeTuteur ? `${Style.inputError}` : '' }
                />
                <span className={Style.divn}>{touched.codeTuteur && errors.codeTuteur ? errors.codeTuteur : ' '}</span>
              </div>
              
              <div className={Style.ssd2}>
                <label >Frais Total (en CFA )</label>
                <Field 
                type="number" 
                name="salary"
                className={touched.salary && errors.salary ? `${Style.inputError}` : '' }
                disabled
                 />
                <span className={Style.divn}>{touched.salary && errors.salary ? errors.salary : ' '}</span>
              </div>

        </div>
          <div className={Style.checkbox}>
              <label style={{display:'inline'}} htmlFor='accomodation'>Lire et accpetez les conditions d'utilisateur</label>
              <Field type="checkbox" name="accomodation" id="accomodation"/>
          </div>
            <span className={Style.divn}>{ touched.accomodation && errors.accomodation ? errors.accomodation : ' '}</span>

      <button type="submit" disabled={isSubmitting}>
              Submit
      </button>
  </Form>
      )}
    </Formik>
  );
};

export default SignupForm;