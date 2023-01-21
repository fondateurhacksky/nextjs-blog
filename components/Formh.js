import { Formik, Form, Field} from 'formik';
import Style from '../styles/formh.module.css';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import Select from 'react-select'


const ageOptions = [
  { label: 'Tout age', value: "all" },
  { label: '18-24 ans', value: "18-24"},
  { label: '25-34 ans', value: "25-34"},
  { label: '35-44+ ans', value: "35-44"},
];

const genderOptions = [
  { label: 'Homme & Femme', value: "all" },
  { label: 'Femme', value: 'F'},
  { label: 'Homme', value: 'M'},
];

const salaryOptions = [
  { label: 'Tous', value: "all" },
  { label: '< 30 000', value: '< 30 000' },
  { label: '30 000 - 50 000', value: '30 000 - 50 000' },
  { label: '50 0000 - 80 0000', value: '50 0000 - 80 0000' },
  { label: '80 0000-100k', value: '80 0000-100k' },
  { label: '> 100k', value: '> 100k' },
];



export default function Formh({ Data, updateData }) {

  const [age, setAge] = useState('all');
  const [gender, setGender] = useState('all');
  const [salary, setsalary] = useState('all');

  useEffect(() => {
    console.log(salary)
    console.log(`${age} AND ${gender}`);
    axios.get('/api/persons/data',{ params: {age: age, gender: gender, salary: salary} })
        .then(res => updateData(res.data))
        .catch(err => console.log(err));
}, [age, gender, salary]);


  return (
    <Formik
      initialValues={{
        age: '',
        gender: '',
        salary: '',
      }}
      onChange={(values) => {
        console.log(values)
      }}
      // onSubmit={ (values) => handlerChange(values)}
    >
      {({values}) => (
        <Form className={Style.form} method='get' name="form">
            <div className={Style.icon}>
            </div>
          <div>
              <Select
              placeholder={'Tranche d\'age voulue'}
              options={ageOptions}
              name="age" 
              id="age"
              onChange={(option) =>setAge(option.value)}
              styles={{
                placeholder: (base) => ({
                  ...base,
                  fontSize: '1em',
                  color: '#3498db',
                  fontWeight: 400,
                }),
              }}
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary25: 'hotpink',
                  primary: 'black',
                },
              })}
              />
          </div>

          <div>
              <Select 
              options={genderOptions}
              placeholder={'Preference du genre'}
              name="gender" 
              id="gender"
              onChange={(option) =>setGender(option.value)}
              styles={{
                placeholder: (base) => ({
                  ...base,
                  fontSize: '1em',
                  color: '#3498db',
                  fontWeight: 400,
                }),
              }}
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                width: 200,
                colors: {
                  ...theme.colors,
                  primary25: 'hotpink',
                  primary: 'black',
                },
              })}
               />
          </div>
               
          <div className="form-group">
              <Select 
              options={salaryOptions} 
              name="salary" 
              id="salary"
              onChange={(option) =>setsalary(option.value)}
              styles={{
                placeholder: (base) => ({
                  ...base,
                  fontSize: '1em',
                  color: '#3498db',
                  fontWeight: 400,
                }),
              }}
              placeholder={'Salaire Proposer'} 
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary25: 'hotpink',
                  primary: 'black',
                },
              })}
               />
          </div>   
            {/* <button type="submit">Filtrer</button> */}
          </Form>
          )}
    </Formik>
  );
}

