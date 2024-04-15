import { ImAccessibility } from "react-icons/im";
import { FaPhoneAlt } from "react-icons/fa";

import css from "../Contact/Contact.module.css";

import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };
  return (
    <div>
      <p>
        <ImAccessibility className={css.icons} />
        {contact.name}
      </p>
      <p>
        <FaPhoneAlt className={css.icons} />
        {contact.number}
      </p>
      <button className={css.del} onClick={handleDelete}>
        delete
      </button>
    </div>
  );
};

export default Contact;
