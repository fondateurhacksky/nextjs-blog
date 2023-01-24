import Style from '../styles/formh.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import { useCart } from "react-use-cart";
import { VscPersonAdd } from 'react-icons/vsc';



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



export default function Formh({ updateData, setShow }) {
  const {
    totalUniqueItems
  } = useCart();
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
        <div className={Style.navbar}>
          <div>
              <Select
              placeholder={'Tranche d\'age voulue'}
              options={ageOptions}
              name="age" 
              id="long-value-select"
              instanceId="long-value-select"
              onChange={(option) =>setAge(option.value)}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor: state.isFocused ? 'grey' : '#3498db',
                  width: 220,
                }),
                placeholder: (base) => ({
                  ...base,
                  fontSize: '1em',
                  color: '#3498db',
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
          </div>

          <div>
              <Select 
              options={genderOptions}
              placeholder={'Preference du genre'}
              name="gender" 
              id="long-value-select"
              instanceId="long-value-select"
              onChange={(option) =>setGender(option.value)}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor: state.isFocused ? 'grey' : '#3498db',
                  width: 220,
                }),
                placeholder: (base) => ({
                  ...base,
                  fontSize: '1em',
                  color: '#3498db',
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
          </div>
               
          <div>
              <Select 
              options={salaryOptions} 
              name="salary" 
              id="long-value-select"
              instanceId="long-value-select"
              onChange={(option) =>setsalary(option.value)}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor: state.isFocused ? 'grey' : '#3498db',
                  width: 220,
                }),
                placeholder: (base) => ({
                  ...base,
                  fontSize: '1em',
                  color: '#3498db',
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
          </div>

          <div className={Style.nav_box}>
            <span className={Style.my_choix} onClick={() => setShow(false)}>Mes Choix</span> <span className={Style.line}>&#124;</span>
            <div className={Style.cart}>
              <span onClick={() => setShow(true)}>
              <VscPersonAdd />
              </span>
              <span className='my_choix'>{totalUniqueItems}</span>
            </div>
          </div>

          </div>
          )
}


