import Contact from "../Contact/Contact";

import css from "../ContactList/ContactList.module.css";

import { selectContacts, deleteContact } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import { useSelector } from "react-redux";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const nameFilter = useSelector(selectNameFilter);

  const filteredContacts = nameFilter
    ? contacts.filter((contact) =>
        contact.username.toLowerCase().includes(nameFilter.toLowerCase())
      )
    : contacts;

  return (
    <ul className={css.list}>
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} onDelete={deleteContact} />
      ))}
    </ul>
  );
};

export default ContactList;
