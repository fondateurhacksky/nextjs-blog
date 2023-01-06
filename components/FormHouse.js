import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Style from '../styles/FormHouse.module.css';

const FormHouse = () => {

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
    loyer: Yup.number().required('Required'),
  });
  

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        salary: '',
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
                <label htmlFor='firstName'>Nom</label>
                <Field type="text" name="firstName" />
                <ErrorMessage name="firstName" component="div" />

                <label htmlFor='lastName'>Prenom</label>
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

            <label htmlFor='salary'>Loyer voulue</label>
            <Field type="text" name="salary" />
            <ErrorMessage name="salary" component="div" />

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormHouse;

        