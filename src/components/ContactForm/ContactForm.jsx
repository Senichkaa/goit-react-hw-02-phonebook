import { Formik, Field, Form } from 'formik';
export const ContactForm = () => {
  return (
    <Formik initialValues={{ name: '', email: '' }} onSubmit={values => {}}>
      <Form>
        <Field name="name" type="text" />
        <Field name="email" type="email" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
