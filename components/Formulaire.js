import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Style from '../styles/form.module.css';

const SignupForm = () => {
  const [radioOptions, setRadioOptions] = useState([    { label: 'Homme', value: 'Homme' },    { label: 'Femme', value: 'Femme' }, { label: 'M/F', value: 'M/F' } ]);
  const [radioOptions2, setRadioOptions2] = useState([    { label: 'CDD', value: 'CDD' },    { label: 'CDI', value: 'CDI' } ]);

  const [defaultRadioOption, setDefaultRadioOption] = useState('option2');

  const [defaultRadioOption2, setDefaultRadioOption2] = useState('option2');

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    phone: Yup.number()
      .min(10, 'Too Short!')
      .max(15, 'Too Long!')
      .required('Required'),
    contractType: Yup.string().required('Required'),
    radioOption: Yup.string().required('Veuillez sélectionner une option'),
    contractDuration: Yup.string().when('radioOption', {
      is: 'CDD',
      then: Yup.number().positive().integer().required('Veuillez entrer la durée du contrat'),
    }),
    codeTuteur: Yup.string('nom message').required('Required').matches(/^[A-Z0-9]{6}$/,
    'Le champ doit contenir 6 caractères qui peuvent être des chiffres ou des lettres majuscules'
    ),
    salary: Yup.number('Le salaire dois etre un nombre').positive().integer().required('Required').test('is-number', 'Le salaire dois etre un nombre', (value) => {
      return !isNaN(value);
    }),
    genderPreference: Yup.string(),
    ageRange: Yup.number(),
    accomodation: Yup.boolean(),
  });
  

  return (
  <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        radioOption: defaultRadioOption,
        radioOption2: defaultRadioOption2,
        email: '',
        phone: '',
        contractType: '',
        contractDuration: '',
        codeTuteur: '',
        salary: '',
        genderPreference: '',
        ageRange: '',
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

      {({values, isSubmitting }) => (
    <Form className={Style.form}>

      <div className={Style.data}>

          <div className={Style.sdata1}>

              <label htmlFor='firstName'>Nom Complet</label>
              <Field type="text" name="firstName" id='firstName'/>
              <ErrorMessage name="firstName" component="div" />

              <label htmlFor='city'>Localiter</label>
              <Field as="select" name="color" id="city">
                  <option value="Abidjan">Abidjan</option>
                  <option value="Bouaké">Bouaké</option>
                  <option value="Yamoussokro">Yamoussokro</option>
              </Field>
                
          </div>

          <div className={Style.sdata2}>

              <label htmlFor='email'>Email</label>
              <Field type="email" name="email" id="email"/>
              <ErrorMessage name="email" component="div" />

              <label htmlFor='phone'>Numero de Telephone</label>
              <Field type="number" name="phone" id="phone" placeholder="0767003424"/>
              <ErrorMessage name="phone" component="div" />

          </div>

      </div>
    
      <div className={Style.target}>
        <div className={Style.radio}>
            <label htmlFor='contrat'>Type de contrat : </label>
            {radioOptions2.map((option) => (
              
              <div key={option.value}>
                <label htmlFor=''>{option.label}</label>
                <Field type="radio" name="contractType" id="contrat"value={option.value}/>
              </div>
              ))}

              <ErrorMessage name="contractType" component="div" />
        </div>

            {values.contractType === 'CDD' && (
              <div>
                <label htmlFor='contractDuration'>Pour combien de temps</label>
                <Field type="text" name="contractDuration" placeholder="2jour, 2mois ...."/>
                <ErrorMessage name="contractDuration" component="div" />
              </div>
            )}
          
          <div className={Style.ssdata}>

              <div className={Style.ssd1}>
                <label htmlFor='codeTuteur'>Code Tuteur</label>
                <Field type="text" name="codeTuteur" placeholder="X6SDF3"/>
                <ErrorMessage name="codeTuteur" component="div" className='error'/>
              </div>
              
              <div className={Style.ssd2}>
                <label htmlFor='numberOfPeople'>Salaire Proposer (en CFA )</label>
                <Field type="number" name="salary" placeholder="50000"/>
                <ErrorMessage name="salary" component="div" />
              </div>
              
          </div>
      </div>
          <div className={Style.checkbox}>
              <label htmlFor='accomodation'>Souhaiterais vous que la personne dorme</label>
              <Field type="checkbox" name="accomodation" id="accomodation"/>
          </div>

      <button type="submit" disabled={isSubmitting}>
              Submit
      </button>
  </Form>
      )}
    </Formik>
  );
};

export default SignupForm;

        