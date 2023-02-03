import * as Yup from 'yup';


export const validationSchema = Yup.object({
    nom: Yup.string().required('Le nom est obligatoire'),
    prenom: Yup.string().required('Le prénom est obligatoire'),
    dateDeNaissance: Yup.date().required('La date de naissance est obligatoire'),
    lieuDeResidance: Yup.string().required('Le lieu de residance est obligatoire'),
    numeroDeTelephone: Yup.string().matches(/^(?:\+)?\d{3}(?:\s)?\d{7,10}$/,
    'le numero n\'est pas valide'
    ).required('Le numéro de téléphone est obligatoire'),
    codeTuteur: Yup.string().matches(/^[A-Z0-9]{6}$/,
    'Code Tuteur incorrect'
    ),
    details: Yup.string().min(10).max(500).required(),
  })