import { FormControl, FormLabel, Input, Button, Flex } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/Auth/authOperations';
import { nanoid } from 'nanoid';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      logIn({
        email: e.currentTarget.elements.email.value,
        password: e.currentTarget.elements.password.value,
      })
    );
    e.currentTarget.reset();
  };
  return (
    <Flex justify="center">
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel display={'flex'} flexDirection={'column'}>
            Email
            <Input type="email" name="email" id={nanoid()} width="300px" />
          </FormLabel>
          <FormLabel display={'flex'} flexDirection={'column'}>
            Password
            <Input
              type="password"
              name="password"
              id={nanoid()}
              width="300px"
            />
          </FormLabel>
          <Button type="submit" colorScheme="blackAlpha">
            Log in
          </Button>
        </FormControl>
      </form>
    </Flex>
  );
};
