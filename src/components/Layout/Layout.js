import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Box } from '@chakra-ui/react';

export const Layout = () => {
  return (
    <Box>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
