import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/Contacts/operations';
import { selectContacts } from 'redux/Contacts/selectors';
import { FormControl, FormLabel, Input, Button, Flex } from '@chakra-ui/react';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const validate = formValidate();
    if (!validate) return;

    dispatch(addContact({ id: nanoid(), name, number }));
    setName('');
    setNumber('');
  };
  const formValidate = () => {
    const sameName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (sameName) {
      alert(`${name} is already in contacts`);
      return;
    }
    return !sameName;
  };

  return (
    <Flex justify="center" pb="10">
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel
            htmlFor={nanoid()}
            display={'flex'}
            flexDirection={'column'}
          >
            Name
            <Input
              width="300px"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              id={nanoid()}
              value={name}
              onChange={handleChange}
            />
          </FormLabel>
          <FormLabel
            htmlFor={nanoid()}
            display={'flex'}
            flexDirection={'column'}
          >
            Number
            <Input
              width="300px"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              id={nanoid()}
              value={number}
              onChange={handleChange}
            />
          </FormLabel>
          <Button type="submit">Add contact</Button>
        </FormControl>
      </form>
    </Flex>
  );
};
