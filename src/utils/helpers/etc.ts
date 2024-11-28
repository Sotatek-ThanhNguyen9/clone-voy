import { ROLE_ACCOUNT_KEY, USER_JWT_KEY } from '../constants/constants';
import { ROLE_ACCOUNT } from '../utils';
import { clientCookie } from '../utils-helper';

export const role = clientCookie.get(ROLE_ACCOUNT_KEY);
export const token = clientCookie.get(USER_JWT_KEY);
export const isClient = () => {
  return typeof window !== 'undefined';
};
export const isMetaMaskInstalled = () => {
  const windowObj = window as any;
  const { ethereum } = windowObj;

  return ethereum && ethereum.isMetaMask;
};
export const isBackpackInstalled = () => {
  const windowObj = window as any;
  const { ethereum } = windowObj;

  return ethereum && ethereum.isBackpack;
};
export const getWindow = () => {
  if (typeof window === 'undefined') return null;

  return window;
};

export const getLinkPromoCode = (url: string | undefined) => {
  return `${url?.startsWith('http') ? '' : '//'}${url}`;
};

export const isOnlyUser = role && +role === ROLE_ACCOUNT.USER;
export const isAdmin = role && +role === ROLE_ACCOUNT.ADMIN;

export const conversionFactor = 1e12;
export const decimalTokenAmount = 1e9;

export const decimalToken = 1e18;

export const tokenAddess = 'AYXnisBv3986sbzQ8wzeyjods9gmNTXDH1P8jxmCYH5Q';

export const numeralAndAlphabeticalRegex = /^[0-9, A-Z, a-z]*$/;
export const numeralAndAlphabeticalSpaceRegex = /^[0-9, A-Z, a-z, \s]*$/;
export const alphabeticalSpaceRegex = /^[A-Z, a-z, \s]*$/;
export const emailRegex =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

export const numberRegex = /^[0-9]*(\.[0-9]{0,6})?$/;

export const numberRegexNoMaxDecimal = /^[0-9]*(\.[0-9]{0,18})?$/;
export const numeralRegex = /^[0-9]*$/;
