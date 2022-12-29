import { ContactItem } from 'components/ContactItem/ContactItem';
import { selectContacts, selectFilter } from 'redux/Contacts/selectors';
import { useSelector } from 'react-redux';
import { Flex, OrderedList } from '@chakra-ui/react';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const getFiltredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filtredContacts = getFiltredContacts();

  return (
    <Flex justify="center">
      <OrderedList>
        {filtredContacts.map(({ name, id, number }) => (
          <ContactItem name={name} key={id} id={id} number={number} />
        ))}
      </OrderedList>
    </Flex>
  );
};
