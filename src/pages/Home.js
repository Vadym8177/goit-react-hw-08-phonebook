import { Box, Heading } from '@chakra-ui/react';
import { FaAddressBook } from 'react-icons/fa';

export default function Home() {
  return (
    <Box>
      <Heading
        as="h1"
        size="2xl"
        justifyContent="center"
        pt="20"
        display="flex"
      >
        Phonebook manager <FaAddressBook />
      </Heading>
    </Box>
  );
}
