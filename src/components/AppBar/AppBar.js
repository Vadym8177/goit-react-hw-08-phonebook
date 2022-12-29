import { Flex, Spacer } from '@chakra-ui/react';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/Auth/authSelectors';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Flex p="5">
      <Navigation />
      <Spacer />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Flex>
  );
};
