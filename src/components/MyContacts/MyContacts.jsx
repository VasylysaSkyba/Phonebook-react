import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getContacts, getIsLoading } from 'redux/contacts/contacts-selectors';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import css from './myContacts.module.css';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter/Filter';
import Notification from 'components/Notification/Notification';

import Loader from 'components/Loader/Loader';

function  MyContacts() {
  const contacts = useSelector(getContacts);
  const isContacts = Boolean(contacts.length);
  const dispatch = useDispatch();

  const loading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

 

  return (
     <div>
      {loading && <Loader />}
      <div className={css.phonebookContainer}>
        <h1 className={css.titlePhonebook}>Phonebook</h1>
        <ContactForm />
        <h2 className={css.titleContacts}>Contacts</h2>
        <div className={css.allContacts}>All contacts: {contacts.length}</div>
        {isContacts ? (
          <>
            <Filter />
            <ContactList />
          </>
        ) : (
          <Notification message="Contact list is empty" />
        )}
      </div>
    </div>
  );
}


export default  MyContacts;