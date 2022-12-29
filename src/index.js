import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="/goit-react-hw-08-phonebook">
            <App />
          </BrowserRouter>
        </PersistGate>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
