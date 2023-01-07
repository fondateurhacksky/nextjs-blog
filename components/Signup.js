import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Style from '../styles/signup.module.css';

const Signup = () => {
  return (
    <Formik
      initialValues={{
        nom: '',
        prenom: '',
        dateDeNaissance: '',
        lieuDeNaissance: '',
        numeroDeTelephone: '',
        codeTuteur: '',
        photoDeProfil: '',
        photoDIdentite: '',
        competences: '',
      }}
      validationSchema={Yup.object({
        nom: Yup.string().required('Le nom est obligatoire'),
        prenom: Yup.string().required('Le prénom est obligatoire'),
        dateDeNaissance: Yup.date().required('La date de naissance est obligatoire'),
        lieuDeNaissance: Yup.string().required('Le lieu de naissance est obligatoire'),
        numeroDeTelephone: Yup.string().required('Le numéro de téléphone est obligatoire'),
        codeTuteur: Yup.string().required('Le code tuteur est obligatoire'),
        photoDeProfil: Yup.string().required('La photo de profil est obligatoire'),
        photoDIdentite: Yup.string().required('La photo d\'identité est obligatoire'),
        competences: Yup.string().required('Les compétences sont obligatoires'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        // Envoyez les données du formulaire ici
        setSubmitting(false);
      }}
    >
     <Form className={Style.form}>
        <div className={Style.data}>

            <div className={Style.sdata1}>

                <div className={Style.ssdata1}>
                    <label htmlFor="nom">Nom</label>
                    <Field name="nom" type="text" />
                    <ErrorMessage name="nom" /> 
                </div>

              <div className={Style.ssdata1}>
                <label htmlFor="prenom">Prénom</label>
                <Field name="prenom" type="text" />
                <ErrorMessage name="prenom" />
              </div>

            </div>

            <div className={Style.sdata2}>
                                    
                <div className={Style.ssdata2}>
                    <label htmlFor="dateDeNaissance">Date de naissance</label>
                    <Field name="dateDeNaissance" type="date" />
                    <ErrorMessage name="dateDeNaissance" />
                </div>

                <div className={Style.ssdata2}>
                  <label htmlFor="lieuDeNaissance">Lieu de naissance</label>
                  <Field name="lieuDeNaissance" type="text" className={Style.form_input} />
                  <ErrorMessage name="lieuDeNaissance" />
                </div>

            </div>
            <div className={Style.sdata3}>

                <div className={Style.ssdata3}>
                  <label htmlFor="numeroDeTelephone">Téléphone</label>
                  <Field name="numeroDeTelephone" type="tel" />
                  <ErrorMessage name="numeroDeTelephone" />
                </div>

                <div className={Style.ssdata3}>
                  <label htmlFor="codeTuteur" >Code tuteur</label>
                  <Field name="codeTuteur" type="text" />
                  <ErrorMessage name="codeTuteur" />
                </div>
            </div>

            
        </div>
        <div className={Style.target}>
            <div className={Style.starget}>
              <label htmlFor="photoDeProfil">Photo de profil</label>
              <Field name="photoDeProfil" type="file" />
              <ErrorMessage name="photoDeProfil" />
            </div>

            <div className={Style.starget}>
              <label htmlFor="photoDIdentite">Photo d'identité</label>
              <Field name="photoDIdentite" type="file" />
              <ErrorMessage name="photoDIdentite" />
            </div>
        </div>

        <Field name="competences" component="textarea" className={Style.textarea} rows={5} placeholder="Comment pouvons vous aider ?"/>
        <ErrorMessage name="competences" />
        <button type="submit">Envoyer</button>
      </Form>
    </Formik>
  );
};

export default Signup