import * as Yup from 'yup';


export const validationSchema = Yup.object({
    nom: Yup.string().required('Le nom est obligatoire'),
    prenom: Yup.string().required('Le prénom est obligatoire'),
    dateDeNaissance: Yup.date().required('La date de naissance est obligatoire'),
    lieuDeNaissance: Yup.string().required('Le lieu de naissance est obligatoire'),
    numeroDeTelephone: Yup.string().required('Le numéro de téléphone est obligatoire'),
    codeTuteur: Yup.string().matches(/^[A-Z0-9]{6}$/,
    'Code Tuteur incorrect'
    ),
    photoDeProfil: Yup.mixed().required(),
    competences: Yup.string().required('Les compétences sont obligatoires'),
    choice: Yup.string().required('Champ obligatoire'),
  // Champ de ville
    city: Yup.string().when('choice', {
    is: 'rent',
    then: Yup.string().required('Champ obligatoire'),
    }),
  // Champ de genre de travail
    jobType: Yup.string().when('choice', {
    is: 'work',
    then: Yup.string().required('Champ obligatoire'),
    }),
  // Champ de texte
    details: Yup.string().required('Champ obligatoire'),
  })