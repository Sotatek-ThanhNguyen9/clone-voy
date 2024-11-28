import _ from 'lodash';
import { destroyCookie, parseCookies, setCookie } from 'nookies';
import { COMMON_ERROR_MESSAGE } from './constants/constants';
import { CHAIN_ID_SUPPORT } from './utils';
import User from './types/user';

export const isString = (value: unknown) => {
  return typeof value === 'string';
};

export const generateAvatarFromId = (id: string | undefined) => {
  return Number(id?.replace(/[a-z -]/gm, ''));
};

export const getErrorMessage = (err: any) => {
  const REGEX_GET_MESSAGE = /execution reverted:([^"]*)/gm;
  if (err.message?.includes('execution reverted:')) {
    const match = REGEX_GET_MESSAGE.exec(err.message);
    return match ? match[1] : COMMON_ERROR_MESSAGE;
  }
  if (isString(err)) {
    return err;
  }
  if (err.message && isString(err.message)) {
    return err.message;
  }
  return COMMON_ERROR_MESSAGE;
};

export const clientCookie = {
  get: (key: string) => {
    try {
      const c = parseCookies(null);
      const val = _.get(c, [key]);

      return val as string;
    } catch (err) {
      return undefined;
    }
  },
  set: (key: string, val: string, opts?: any) => {
    try {
      setCookie(null, key, val, { ...opts, path: '/' });

      return true;
    } catch (err) {
      return false;
    }
  },
  destroy: (key: string) => {
    try {
      destroyCookie(null, key, { path: '/' });

      return true;
    } catch (err) {
      return false;
    }
  },
};

export function sleep(ms = 700) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const externalTxLink = (transactionHash: string, chainId: number) => {
  switch (chainId) {
    case CHAIN_ID_SUPPORT.ETH_MAINNET:
      return `https://etherscan.io/tx/${transactionHash}`;
    case CHAIN_ID_SUPPORT.ETH_SEPOLIA:
      return `https://sepolia.etherscan.io/tx/${transactionHash}`;
    case CHAIN_ID_SUPPORT.ARBITRUM:
      return `https://arbiscan.io/tx/${transactionHash}`;
    case CHAIN_ID_SUPPORT.ARBITRUM_SEPOLIA:
      return `https://sepolia.arbiscan.io/tx/${transactionHash}`;
    default:
      return '';
  }
};
