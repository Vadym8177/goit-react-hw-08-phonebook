import { Link, Flex } from '@chakra-ui/react';
import { Link as NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/Auth/authSelectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Flex>
      <Link as={NavLink} to="/" mr="5" color="teal.500">
        Home
      </Link>
      {isLoggedIn && (
        <Link as={NavLink} to="/contacts" color="teal.500">
          Contacts
        </Link>
      )}
    </Flex>
  );
};
