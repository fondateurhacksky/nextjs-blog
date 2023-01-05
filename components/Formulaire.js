import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Style from '../styles/form.module.css';

const SignupForm = () => {
  const [radioOptions, setRadioOptions] = useState([    { label: 'Homme', value: 'Homme' },    { label: 'Femme', value: 'Femme' },  ]);
  const [radioOptions2, setRadioOptions2] = useState([    { label: 'CDD', value: 'CDD' },    { label: 'CDI', value: 'CDI' },  ]);

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
    phone: Yup.string()
      .min(10, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    contractType: Yup.string().required('Required'),
    radioOption: Yup.string().required('Veuillez sélectionner une option'),
    contractDuration: Yup.number().when('radioOption', {
      is: 'CDD',
      then: Yup.number().required('Veuillez entrer la durée du contrat'),
    }),
    numberOfPeople: Yup.number().required('Required'),
    salary: Yup.number().required('Required'),
    genderPreference: Yup.string(),
    ageRange: Yup.string(),
    accomodation: Yup.boolean(),
  });
  

  return (
    <Formik
      initialValues={{
        firstName: '',
        radioOption: defaultRadioOption,
        radioOption2: defaultRadioOption2,
        lastName: '',
        email: '',
        phone: '',
        contractType: '',
        contractDuration: '',
        numberOfPeople: '',
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
                <label htmlFor='firstName'>Prenom</label>
                <Field type="text" name="firstName" />
                <ErrorMessage name="firstName" component="div" />

                <label htmlFor='lastName'>Nom</label>
                <Field type="text" name="lastName" />
                <ErrorMessage name="lastName" component="div" />

                <label htmlFor='email'>Email</label>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" />

                <label htmlFor='phone'>Numero de Telephone</label>
                <Field type="text" name="phone" />
                <ErrorMessage name="phone" component="div" />
              </div>
    
              <div className={Style.object}>
                <div className={Style.radio}>
                  {radioOptions2.map((option) => (
                    <div key={option.value}>
                      <Field type="radio" name="contractType" value={option.value}/>
                      {option.label}
                    </div>
                  ))}
                  <ErrorMessage name="contractType" component="div" />
    
                  {radioOptions.map((option) => (
                    <div key={option.value}>
                      <Field type="radio" name="radioOption2" value={option.value}/>
                      {option.label}
                    </div>
                  ))}
                 
    
                 <ErrorMessage name="radioOption2" component="div" />
            </div>

            {values.contractType === 'CDD' && (
              <div>
                <label htmlFor='contractDuration'>Pour combien de temps</label>
                <Field type="number" name="contractDuration" />
                <ErrorMessage name="contractDuration" component="div" />
              </div>
            )}

            <label htmlFor='numberOfPeople'>Nombres de Personnne Souhaiter</label>
            <Field type="number" name="numberOfPeople" />
            <ErrorMessage name="numberOfPeople" component="div" />

            <label htmlFor='numberOfPeople'>Salaire Proposer</label>
            <Field type="text" name="salary" />
            <ErrorMessage name="salary" component="div" />

            <label htmlFor='accomodation'>Souhaiterais vous que la personne dorme</label>
            <Field type="checkbox" name="accomodation" />
            <ErrorMessage name="accomodation" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;

        