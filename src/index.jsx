import { ColorModeScript,ChakraProvider, theme } from '@chakra-ui/react';
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { FirebaseProvider } from './context/Firebase';
import "./styles/index.css"
import { SaasProvider } from '@saas-ui/react'

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <FirebaseProvider>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
    <SaasProvider>
      <ColorModeSwitcher/>
    <App />
    </SaasProvider>
    </ChakraProvider>
  </FirebaseProvider>
);


