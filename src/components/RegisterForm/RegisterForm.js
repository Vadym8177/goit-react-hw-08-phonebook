import { useDispatch } from 'react-redux';
import { register } from 'redux/Auth/authOperations';
import { nanoid } from 'nanoid';
import { FormControl, FormLabel, Input, Flex, Button } from '@chakra-ui/react';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      register({
        name: e.currentTarget.elements.name.value,
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
            Username
            <Input type="text" name="name" id={nanoid()} width="300px" />
          </FormLabel>
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
            Register
          </Button>
        </FormControl>
      </form>
    </Flex>
  );
};
