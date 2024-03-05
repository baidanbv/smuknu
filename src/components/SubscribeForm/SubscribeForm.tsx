import { useState } from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import SuccessPopup from '../SuccessPopup/SuccessPopup';
import subscribeValidationSchema from '../../validation/subscribeValidationSchema';
import styles from './SubscribeForm.module.scss';

interface InitialFormValues {
  fullName: string;
  email: string;
  message: string;
}

const SubscribeForm = () => {
  const [successPopup, setSuccessPopup] = useState(false);
  const [subscriberName, setSubscriberName] = useState('');

  const initialValues = {
    fullName: '',
    email: '',
    message: ''
  };

  const handleSubmit = async (values: InitialFormValues, { setSubmitting }: FormikHelpers<InitialFormValues>) => {
    try {
      const subscriberData = {
        name: values.fullName,
        email: values.email,
        message: values.message
      };
      await axios.post('https://smuknu.webmcdm.dk/subscribe', subscriberData);
      setSubscriberName(values.fullName);
      setSuccessPopup(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className={styles.FormSection}>
        <div className="wrapper">
          <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={subscribeValidationSchema}>
            {({ isSubmitting }) => (
              <Form className={styles.SubscribeForm}>
                <div className={styles.formField}>
                  <label htmlFor="fullName">Full Name</label>
                  <Field type="text" name="fullName" id="name" />
                  <ErrorMessage className={styles.errorField} name="fullName" component="div" />
                </div>

                <div className={styles.formField}>
                  <label htmlFor="email">Email</label>
                  <Field type="email" name="email" id="email" />
                  <ErrorMessage className={styles.errorField} name="email" component="div" />
                </div>

                <div className={styles.formField}>
                  <label htmlFor="message">Message</label>
                  <Field as="textarea" name="message" id="message" />
                  <ErrorMessage className={styles.errorField} name="message" component="div" />
                </div>

                <div className={styles.btnWrapper}>
                  <button type="submit" disabled={isSubmitting} className={styles.confirmSubscribe}>
                    Opret
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </section>
      {successPopup && <SuccessPopup subscriberName={subscriberName} />}
    </>
  );
};

export default SubscribeForm;
