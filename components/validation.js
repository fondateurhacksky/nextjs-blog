import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),

    email: Yup.string()
      .email('Invalid email'),
    city: Yup.string()
      .required('Required'),
    phone: Yup.string()
    .matches(/^\d{13}$|^\+\d{13}$/,
    'votre numero n\'est pas valide'
      )
    .required('Required'),
    codeTuteur: Yup.string().matches(/^[A-Z0-9]{6}$/,
    'six chiffres et lettres majuscules'
    ),
    accomodation: Yup.boolean('Vouz devez accptez les conditions').oneOf([true], 'Must be true'),
  });