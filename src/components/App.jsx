import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container, Subtitle, Title } from './App.styled';
import { useSelector } from 'react-redux';
import { selectorLoading } from 'redux/contacts/selectors';
import { Loader } from './Loader/Loader';
import { TostBox } from './Toast/Toast';

export const App = () => {
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
