import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Box, Heading } from '@chakra-ui/react';

export default function Register() {
  return (
    <Box>
      <Heading as="h2" textAlign="center" pb="5">
        Registration
      </Heading>
      <RegisterForm />
    </Box>
  );
}
