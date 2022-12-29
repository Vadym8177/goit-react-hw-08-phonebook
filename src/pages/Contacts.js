import { Box, Heading, Text } from '@chakra-ui/react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/Contacts/selectors';
import { fetchContacts } from 'redux/Contacts/operations';

export default function Contacts() {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box>
      <Heading as="h1" textAlign="center" pb="5">
        Phonebook
      </Heading>
      <ContactForm />
      <Heading as="h2" textAlign="center" pb="5">
        Contacts
      </Heading>
      <Filter />
      {loading && <Text textAlign="center">Loading...</Text>}
      <ContactList />
    </Box>
  );
}
