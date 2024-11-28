import { AuthAdapter, MFA_LEVELS } from '@web3auth/auth-adapter';
import { UX_MODE, WEB3AUTH_NETWORK } from '@web3auth/base';
import { getDefaultExternalAdapters } from '@web3auth/default-evm-adapter';
import { EthereumPrivateKeyProvider } from '@web3auth/ethereum-provider';
import { Web3AuthOptions } from '@web3auth/modal';
import {
  BUTTON_POSITION,
  CONFIRMATION_STRATEGY,
  WalletServicesPlugin,
} from '@web3auth/wallet-services-plugin';

import { chain } from '../config/chainConfig';

const privateKeyProvider = new EthereumPrivateKeyProvider({
  config: {
    chainConfig: chain.ethereum,
  },
});

const lang =
  localStorage.getItem('voy-language') ?? localStorage.getItem('i18nextLng');

export const web3AuthOptions: Web3AuthOptions = {
  chainConfig: chain.ethereum,
  clientId: import.meta.env.VITE_WEB3AUTH_CLIENT_ID,
  web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_MAINNET,
  privateKeyProvider,
};

export const authAdapter = new AuthAdapter({
  loginSettings: {
    mfaLevel: MFA_LEVELS.OPTIONAL,
  },
  adapterSettings: {
    uxMode: UX_MODE.REDIRECT, // "redirect" | "popup"
    whiteLabel: {},
  },
});

const walletServicesPlugin = new WalletServicesPlugin({
  wsEmbedOpts: {},
  walletInitOptions: {
    whiteLabel: {
      showWidgetButton: true,
      buttonPosition: BUTTON_POSITION.BOTTOM_RIGHT,
    },
    confirmationStrategy: CONFIRMATION_STRATEGY.MODAL,
  },
});

const adapters = getDefaultExternalAdapters({ options: web3AuthOptions });

const web3AuthContextConfig = {
  web3AuthOptions,
  adapters: [authAdapter, ...adapters],
  plugins: [walletServicesPlugin],
};

export default web3AuthContextConfig;
