import { Formik, Form, Field} from 'formik';
import Style from '../styles/formh.module.css';
import axios from 'axios';


const ageOptions = [
  { label: '18-24', value: '18-24' },
  { label: '25-34', value: '25-34' },
  { label: '35-44', value: '35-44' },
  { label: '45+', value: '45+' },
];

const genderOptions = [
  { label: 'Femme', value: 'Femme' },
  { label: 'Homme', value: 'Homme' },
];

const salaryOptions = [
  { label: '< 30 000', value: '< 30 000' },
  { label: '30 000 - 50 000', value: '30 000 - 50 000' },
  { label: '50 0000 - 80 0000', value: '50 0000 - 80 0000' },
  { label: '80 0000-100k', value: '80 0000-100k' },
  { label: '> 100k', value: '> 100k' },
];


export default function Formh() {
  return (
    <Formik
      initialValues={{
        age: '',
        gender: '',
        salary: '',
        housing: false,
      }}
      onSubmit={ (values) => handlerSubmit(values)}
    >
      {() => (
        <Form className={Style.form} method='get'>
            <div className={Style.icon}>
            </div>
          <div className="form-group">
            <label htmlFor="age">Tranche d'âge</label>
            <Field as="select" name="age" id="age">
              <option value="">Tous</option>
              {ageOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Field>
          </div>

          <div className="form-group">
            <label htmlFor="gender">Préférence de genre</label>
            <Field as="select" name="gender" id="gender">
              <option value="">Tous</option>
              {genderOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
                           ))}
                           </Field>
                         </div>
               
                         <div className="form-group">
                           <label htmlFor="salary">Salaire proposé ( CFA )</label>
                           <Field as="select" name="salary" id="salary">
                             <option value="">Tous</option>
                             {salaryOptions.map((option) => (
                               <option key={option.value} value={option.value}>
                                 {option.label}
                               </option>
                             ))}
                           </Field>
                         </div>
               
                         <div className={`"form-group" ${Style.form_label}`}>
                           <label htmlFor="housing">
                             <label>Je souhaiterais que la personne dorme</label>
                             <Field type="checkbox" name="housing" id="housing" />
                           </label>
                         </div>
               
                         <button type="submit">Filtrer</button>
                       </Form>
                     )}
                   </Formik>
                 );
               }

