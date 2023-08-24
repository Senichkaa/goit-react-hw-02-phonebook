import { Formik, Field, Form } from 'formik';
// import * as Yup from 'yup';

// const contactSchema = Yup.object().shape({
//   name: Yup.string.min(2, 'Too short name!').required('required'),
// });

export const ContactForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{ name: '' }}
      //   validationSchema={contactSchema}
      onSubmit={(values, actions) => {
        onAdd(values);
        actions.resetForm();
      }}
    >
      <Form>
        <Field name="name" type="text" />

        {/* <Field name="number" type="number" /> */}
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
