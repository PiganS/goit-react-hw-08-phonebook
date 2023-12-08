import React from 'react';

import { useSelector } from 'react-redux';
import { selectorLoading } from 'redux/contacts/selectors';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { TostBox } from 'components/Toast/Toast';
import { Container, Subtitle, Title } from 'components/App.styled';

const Contacts = () => {
  const spiner = useSelector(selectorLoading);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <Subtitle>Contacts</Subtitle>
      <Filter />
      {spiner && <Loader />}
      <ContactList />
      <TostBox />
    </Container>
  );
};

export default Contacts;
