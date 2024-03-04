import axios from 'axios';
import { Formik, Form, Field, ErrorMessage, FieldProps } from 'formik';
import { PatternFormat } from 'react-number-format';

import { Order } from '../../interfaces/Order';
import { Link } from 'react-router-dom';
import checkoutValidationSchema from '../../validation/checkoutValidationSchema';

import styles from './CheckoutForm.module.scss';
import { useState } from 'react';

interface CheckoutFormProps {
  orders: Order[];
  clearCart: () => void;
}

interface InitialFormValues {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  postCode: string;
  phone: string;
}

const CheckoutForm = ({ orders, clearCart }: CheckoutFormProps) => {
  const [isError, setIsError] = useState(false);
  const initialValues = {
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postCode: '',
    phone: ''
  };
  const validationSchema = checkoutValidationSchema();

  const handleSubmit = async (values: InitialFormValues) => {
    try {
      const orderDetails = {
        products: orders,
        email: values.email,
        createdAt: new Date()
      };
      await axios.post('https://smuknu.webmcdm.dk/orders', orderDetails);
      clearCart();
    } catch (error) {
      setIsError(true);
      console.error('Error submitting form:');
    }
  };

  return (
    <>
      {orders.length > 0 ? (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
          {() => (
            <Form className={styles.CheckoutForm}>
              <div className={styles.formField}>
                <label htmlFor="firstName">Fornavn*</label>
                <Field type="text" name="firstName" id="firstName" placeholder="Fornavn" />
                <ErrorMessage className={styles.errorField} name="firstName" component="div" />
              </div>

              <div className={styles.formField}>
                <label htmlFor="lastName">Efternavn*</label>
                <Field type="text" name="lastName" id="lastName" placeholder="Efternavn" />
                <ErrorMessage className={styles.errorField} name="lastName" component="div" />
              </div>

              <div className={styles.formField}>
                <label htmlFor="email">Email</label>
                <Field type="email" name="email" id="email" placeholder="Email" />
                <ErrorMessage className={styles.errorField} name="email" component="div" />
              </div>
              
              <div className={styles.formField}>
                <label htmlFor="address">Adresse*</label>
                <Field type="text" name="address" id="address" placeholder="Adresse" />
                <ErrorMessage className={styles.errorField} name="address" component="div" />
              </div>

              <div className={styles.locationFields}>
                <div className={styles.formField}>
                  <label htmlFor="city">By*</label>
                  <Field type="text" name="city" id="city" placeholder="By" />
                  <ErrorMessage className={styles.errorField} name="city" component="div" />
                </div>

                <div className={styles.formField}>
                  <label htmlFor="postCode">Postnummer*</label>
                  <Field type="text" name="postCode" id="postCode" placeholder="Postnummer" />
                  <ErrorMessage className={styles.errorField} name="postCode" component="div" />
                </div>
              </div>

              <div className={styles.formField}>
                <label htmlFor="phone">Mobil nummer*</label>
                <Field name="phone">{(fieldProps: FieldProps) => <PatternFormat {...fieldProps.field} format="+45 ####-####" mask="_" id="phone" placeholder="Mobil nummer" />}</Field>
                <ErrorMessage className={styles.errorField} name="phone" component="div" />
              </div>

              <div className={styles.btnWrapper}>
                <button type="submit" disabled={isError} className={styles.confirmOrder}>
                  Bestil
                </button>
              </div>
              {isError && <div className={styles.errorContent}>Der opstod en fejl under indsendelse af formularen. Prøv igen senere</div>}
            </Form>
          )}
        </Formik>
      ) : (
        <div className={`wrapper ${styles.successfullyCheckout}`}>
          <p>
            Din ordre er blevet behandlet <span>med succes</span>
          </p>
          <div className={styles.backToShop}>
            Du kan vende tilbage til
            <Link to="/">Forsiden</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
