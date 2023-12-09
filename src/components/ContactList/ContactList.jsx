import { useDispatch, useSelector } from 'react-redux';
import { ButtonDel, Contact, ContactText } from './ContactList.styled';

import { selectShowContacts } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';
import { toast } from 'react-toastify';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectShowContacts);

  useEffect(() => {
    dispatch(fetchContacts())
      .unwrap()
      .then()
      .catch(err => {
        toast.error(err);
      });
  }, [dispatch]);

  const handleDeleteProduct = id => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(toast.info(`contact successfully deleted`))
      .catch(err => {
        toast.error(err);
      });
  };

  return (
    <ul>
      {filteredContacts.map(contact => (
        <Contact key={contact.id}>
          <ContactText>
            {contact.name}
            <br />
            {contact.number}
          </ContactText>
          <ButtonDel
            onClick={() => handleDeleteProduct(contact.id)}
            type="button"
          >
            Delete
          </ButtonDel>
        </Contact>
      ))}
    </ul>
  );
};
