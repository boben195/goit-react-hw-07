import Contact from "../Contact/Contact";

import css from "../ContactList/ContactList.module.css";

// import { selectContacts, deleteContact } from "../../redux/contactsSlice";
// import { selectNameFilter } from "../../redux/filtersSlice";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  // const contacts = useSelector(selectContacts);
  // const nameFilter = useSelector(selectNameFilter);

  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
