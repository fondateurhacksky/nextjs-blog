import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),

    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    city: Yup.string()
      .required('Required'),
    phone: Yup.string()
    .matches(/^\d{13}$|^\+\d{13}$/,
    'votre numero n\'est pas valide'
      )
    .required('Required'),
    contractType: Yup.string().required('Required'),
    radioOption: Yup.string().required('Veuillez sélectionner une option'),
    codeTuteur: Yup.string('nom message').required('Required').matches(/^[A-Z0-9]{6}$/,
    'six chiffres et lettres majuscules'
    ),
    salary: Yup.number('Le salaire dois etre un nombre').positive().integer().required('Required').test('is-number', 'Le salaire dois etre un nombre', (value) => {
      return !isNaN(value);
    }),
    accomodation: Yup.boolean(),
  });