import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import css from './ContactList.module.css';
import ContactListItem from '../ContactListItem';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem key={id} name={name} number={number} id={id} />
      ))}
    </ul>
  );
};

export default ContactList;