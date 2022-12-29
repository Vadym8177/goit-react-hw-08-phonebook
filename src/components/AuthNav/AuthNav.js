import { Box, Link } from '@chakra-ui/react';
import { Link as NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <Box>
      <Link as={NavLink} to="/register" mr="5" color="teal.500">
        Register
      </Link>
      <Link as={NavLink} to="/login" color="teal.500">
        Log in
      </Link>
    </Box>
  );
};
