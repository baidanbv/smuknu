import * as Yup from 'yup';

const subscribeValidationSchema = () => {
  return Yup.object().shape({
    fullName: Yup.string()
      .min(2, 'For kort navn!')
      .max(50, 'For langt navn!')
      .matches(/^[A-Za-z\s]+$/, 'Fulde nav må ikke indeholde tal')
      .required('Navnet skal udfyldes*'),
    email: Yup.string()
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Ugyldigt e-mail-format')
      .required('Email skal udfyldes*')
      .max(50, 'Too Long Email!'),
    message: Yup.string().min(2, 'Beskeden er for kort').max(1000, 'Beskeden er for langt').required('Vi beder jer at skrive noget...*')
  });
};

export default subscribeValidationSchema;
