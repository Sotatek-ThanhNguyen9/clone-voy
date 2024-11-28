import BigNumber from 'bignumber.js';
import { decimalToken } from './helpers/etc';

export const formatAddress = (address?: string, amount = 4) => {
  if (!address) return '';
  return `${address.slice(0, amount)}...${address.slice(-amount)}`;
};

export const formatValueNumber = (val: string | number | BigNumber) => {
  return new BigNumber(val).decimalPlaces(9, 1).toString();
};

export const formattedNumber = (
  val?: string | number | BigNumber,
  minimumFractionDigits: number = 0,
  maximumFractionDigits: number = 6,
) => {
  if (!val || val === 'NaN') return 0;
  const value = +formatValueNumber(val);
  return value.toLocaleString('en-US', {
    minimumFractionDigits,
    maximumFractionDigits,
  });
};

export const formattedApr = (val: string | number | BigNumber) => {
  if (!val || val === 'NaN') return 0;
  const value = +formatValueNumber(val);
  return value.toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
};

export const formatValueWithTwoDecimal = (
  val: string | number | BigNumber,
  decimal: number = 2,
) => {
  if (!val || val === 'NaN') return 0;
  const bigNumberVal = new BigNumber(val);
  return bigNumberVal.toFixed(decimal);
};

export const number2KMBT = (val?: string | number, precision = 2) => {
  const num = Number(val);
  if (Number.isNaN(num)) return '0';

  const map = [
    { suffix: 'T', threshold: 1e12 },
    { suffix: 'B', threshold: 1e9 },
    { suffix: 'M', threshold: 1e6 },
    { suffix: '', threshold: 1 },
  ];

  const found = map.find((x) => Math.abs(num) >= x.threshold);
  if (found) {
    const formatted =
      (num / found.threshold).toLocaleString('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: precision,
      }) + found.suffix;
    return formatted;
  } else {
    return formattedNumberWithDecimal(val, precision);
  }
};

export const formattedNumberWithDecimal = (
  val?: string | number | BigNumber,
  decimal: number = 2,
) => {
  if (!val || val === 'NaN') return '0';
  const value = +formatValueWithTwoDecimal(val, decimal);
  return value.toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 18,
  });
};

export const formatBigNumber = (val: string | number | BigNumber) => {
  if (!val || val === 'NaN') return 0;
  return new BigNumber(val).div(decimalToken).toNumber();
};
