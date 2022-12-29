import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/Contacts/selectors';
import { filtration } from 'redux/Contacts/filterSlice';
import { Flex, FormLabel, Heading, Input } from '@chakra-ui/react';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filterContact = e => {
    dispatch(filtration(e.currentTarget.value));
  };
  return (
    <Flex justify="center">
      <FormLabel>
        <Heading textAlign="center" size="md">
          Find contacts by name
        </Heading>
        <Input
          display={'flex'}
          type="text"
          value={filter}
          width="300px"
          onChange={filterContact}
        ></Input>
      </FormLabel>
    </Flex>
  );
};
