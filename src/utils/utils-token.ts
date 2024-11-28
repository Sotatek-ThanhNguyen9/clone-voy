import contractStakingEth from '../abi/contract_staking_eth.json';
import contractStakingArb from '../abi/contract_staking_arb.json';
import { NAME_STAKE_COIN } from './common';
import { CHAIN_ID_SUPPORT } from './utils';
import { toastError } from './utils-notify';
import _ from 'lodash';
import { TFunction } from 'i18next';

export const isEthereumNetwork = (chainId: number) => {
  return (
    chainId === CHAIN_ID_SUPPORT.ETH_SEPOLIA ||
    chainId === CHAIN_ID_SUPPORT.ETH_MAINNET
  );
};

export const isArbitrumNetwork = (chainId: number) => {
  return (
    chainId === CHAIN_ID_SUPPORT.ARBITRUM ||
    chainId === CHAIN_ID_SUPPORT.ARBITRUM_SEPOLIA
  );
};

const getTokenAddressETH = (symbol: string) => {
  switch (symbol) {
    case NAME_STAKE_COIN.VOY:
      return import.meta.env.VITE_CONTRACT_TOKEN_ETH!;
    case NAME_STAKE_COIN.RETH:
      return import.meta.env.VITE_CONTRACT_TOKEN_RETH_ETH!;
    case NAME_STAKE_COIN.SFRXETH:
      return import.meta.env.VITE_CONTRACT_TOKEN_SFRX_ETH!;
    case NAME_STAKE_COIN.CBETH:
      return import.meta.env.VITE_CONTRACT_TOKEN_CB_ETH!;
    default:
      return '';
  }
};

const getTokenAddressARB = (symbol: string) => {
  switch (symbol) {
    case NAME_STAKE_COIN.VOY:
      return import.meta.env.VITE_CONTRACT_TOKEN_ARBITRUM!;
    case NAME_STAKE_COIN.RETH:
      return import.meta.env.VITE_CONTRACT_TOKEN_RETH_ARBITRUM!;
    case NAME_STAKE_COIN.SFRXETH:
      return import.meta.env.VITE_CONTRACT_TOKEN_SFRX_ARBITRUM!;
    case NAME_STAKE_COIN.CBETH:
      return import.meta.env.VITE_CONTRACT_TOKEN_CB_ARBITRUM!;
    default:
      return '';
  }
};

export const getTokenAddress = (chainId: number, symbol: string) => {
  return isEthereumNetwork(chainId)
    ? getTokenAddressETH(symbol)
    : isArbitrumNetwork(chainId)
    ? getTokenAddressARB(symbol)
    : '';
};

export const getStakingAddress = (chainId: number) => {
  return isEthereumNetwork(chainId)
    ? import.meta.env.VITE_CONTRACT_STAKING_ETH!
    : isArbitrumNetwork(chainId)
    ? import.meta.env.VITE_CONTRACT_STAKING_ARBITRUM!
    : '';
};

export const getContractStaking = (chainId: number) => {
  return isEthereumNetwork(chainId)
    ? contractStakingEth
    : isArbitrumNetwork(chainId)
    ? contractStakingArb
    : '';
};

export const getAddressVault = (chainId: number) => {
  return isEthereumNetwork(chainId)
    ? import.meta.env.VITE_CONTRACT_VAULT_ETH
    : isArbitrumNetwork(chainId)
    ? import.meta.env.VITE_CONTRACT_VAULT_ARBITRUM
    : '';
};

export const processError = (
  error: any,
  t: TFunction<'translation', undefined>,
) => {
  if (_.startsWith(error?.message, 'user rejected action')) {
    toastError({
      message: t('Transaction failed! User rejected the request.'),
    });
  } else if (_.startsWith(error?.message, 'execution reverted')) {
    toastError({
      message: t('Transaction failed! Unexpected error.'),
    });
  } else if (_.startsWith(error?.message, 'could not coalesce error')) {
    toastError({
      message: t('Transaction failed! Unexpected error.'),
    });
  } else if (_.startsWith(error?.message, 'replacement fee too low')) {
    toastError({
      message: t('Transaction failed! Unexpected error.'),
    });
  } else if (_.startsWith(error?.message, 'nonce has already been used')) {
    toastError({
      message: t('Transaction failed! Unexpected error.'),
    });
  } else {
    toastError({ message: t('Transaction failed! Unexpected error.') });
  }
};
