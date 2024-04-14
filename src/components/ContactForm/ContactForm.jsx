import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import css from "../ContactForm/ContactForm.module.css";

import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

const ContactSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(7, "Must be a valid like 111-11-11!")
    .required("Required"),
});

const initialValues = {
  username: "",
  number: "",
};

const ContactForm = () => {
  // const handleSubmit = (e) => {
  //   onAdd({
  //     id: Date.now(),
  //     username: e.target.elements.username.value,
  //     number: e.target.elements.number.value,
  //   });
  //   e.resetForm();
  // };
  const dispatch = useDispatch();
  // const contacts = useSelector(selectContacts);

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact({ id: Date.now(), ...values }));
    resetForm();
  };

  return (
    <Formik
      validationSchema={ContactSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label}>Name</label>
        <Field
          className={css.field}
          placeholder="enter name"
          type="text"
          name="username"
        />
        <ErrorMessage name="username" as="span" />
        <label className={css.label}>Number</label>
        <Field
          className={css.field}
          placeholder="123-45-67"
          type="text"
          name="number"
        />
        <ErrorMessage name="number" as="span" />
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
