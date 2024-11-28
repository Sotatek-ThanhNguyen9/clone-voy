import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  Web3AuthInnerContext,
  Web3AuthProvider,
} from '@web3auth/modal-react-hooks';
import { WalletServicesProvider } from '@web3auth/wallet-services-plugin-react-hooks';
import moment from 'moment-timezone';
import 'moment/locale/ja';
import { RouterProvider } from 'react-router-dom';
import { WagmiProvider } from 'wagmi';
import { config } from './config';
import web3AuthContextConfig from './services/web3authContext';
import './i18n';

import './App.css';
import 'src/styles/global.scss';
import RouterCustom from './routers/routes';

moment.tz.setDefault('UTC');

const queryClient = new QueryClient();

function App() {
  return (
    <Web3AuthProvider config={web3AuthContextConfig}>
      <WalletServicesProvider context={Web3AuthInnerContext}>
        <QueryClientProvider client={queryClient}>
          <ColorModeScript initialColorMode="dark" />
          <RouterProvider router={RouterCustom()} />
        </QueryClientProvider>
      </WalletServicesProvider>
    </Web3AuthProvider>
  );
}

export default App;
