import { deleteContact } from 'redux/Contacts/operations';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, ListItem } from '@chakra-ui/react';

export function ContactItem({ name, id, number }) {
  const dispatch = useDispatch();
  return (
    <>
      <ListItem display="flex" alignItems="center" fontSize="20">
        {name}: {number}
        <Button
          type="button"
          onClick={() => dispatch(deleteContact(id))}
          size="xs"
          ml="5"
        >
          Delete
        </Button>
      </ListItem>
    </>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  number: PropTypes.string,
};
