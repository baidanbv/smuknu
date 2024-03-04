import * as Yup from 'yup';

const checkoutValidationSchema = () => {
  return Yup.object().shape({
    email: Yup.string()
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Ugyldigt e-mail-format')
      .required('Email skal udfyldes*')
      .max(50, 'Too Long Email!'),
    firstName: Yup.string()
      .min(2, 'For kort navn!')
      .max(50, 'For langt navn!')
      .matches(/^[A-Za-z\s]+$/, 'Fornavn må ikke indeholde tal')
      .required('Navnet skal udfyldes*'),
    lastName: Yup.string()
      .min(2, 'For kort navn!')
      .max(50, 'For langt navn!')
      .matches(/^[A-Za-z]+$/, 'Efternavn må ikke indeholde tal')
      .required('Navnet skal udfyldes*'),
    address: Yup.string()
      .matches(/^[A-Za-zæøåÆØÅ]+\s\d+[A-Za-zæøåÆØÅ]*$/, 'Ugyldigt adresse format')
      .required('Adresse skal udfyldes*'),
    city: Yup.string()
      .matches(/^[A-Za-z]+(?:[-\s][A-Za-z]+)*$/, 'Bynavn må ikke indeholde tal')
      .required('By skal udfyldes*'),
    postCode: Yup.string()
      .matches(/^[0-9]+$/, 'Postcode must be numeric')
      .required('Postnummer skal udfyldes*'),
    phone: Yup.string()
      .matches(/^\+45 \d{4}-\d{4}$/, 'Invalid phone format')
      .required('Mobil nummer skal udfyldes*')
  });
};

export default checkoutValidationSchema;
