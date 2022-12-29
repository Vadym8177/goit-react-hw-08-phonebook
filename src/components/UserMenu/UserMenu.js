import { Box, Button, Text } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'redux/Auth/authSelectors';
import { logOut } from 'redux/Auth/authOperations';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <Box display="flex" flexDirection="column">
      <Text as="kbd">{user.email}</Text>
      <Button type="button" onClick={() => dispatch(logOut())} size="sm">
        Logout
      </Button>
    </Box>
  );
};
