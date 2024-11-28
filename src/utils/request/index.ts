import axios from 'axios';
import _ from 'lodash';
import qs from 'qs';
import { USER_JWT_KEY } from '../constants/constants';
import { getResponseMsg } from '../constants/response-code';
import { isClient } from '../helpers/etc';
import { clientCookie } from '../utils-helper';

export interface ErrorPayload {
  code: string;
  statusCode: number | undefined;
  message: string;
  data: any;
  raw: any;
}

const initRequest = () => {
  const req = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: undefined,
    paramsSerializer: (params) =>
      qs.stringify(params, { arrayFormat: 'comma' }),
  });
  req.interceptors.response.use(undefined, (err: any) => {
    const data = err?.response?.data || {};
    const statusCode = data?.statusCode;
    const codeAsNumber = +(data?.code ?? '99');
    data['code'] = Number.isNaN(codeAsNumber)
      ? '99'
      : minTwoDigits(codeAsNumber);
    data['statusCode'] = statusCode;

    const payload: ErrorPayload = {
      ...data,
      code: Number.isNaN(codeAsNumber) ? '99' : minTwoDigits(codeAsNumber),
      statusCode: statusCode,
      message: getResponseMsg(data?.code),
      raw: err?.response?.data,
    };

    return Promise.reject(payload);
  });

  return req;
};

export const request = initRequest();

function minTwoDigits(n: any) {
  return (+n < 10 ? '0' : '') + n;
}

if (isClient()) {
  request.interceptors.request.use(async (config) => {
    const token = clientCookie.get(USER_JWT_KEY);

    if (token) {
      _.set(config, ['headers', 'Authorization'], `Bearer ${token}`);
    }

    return config;
  });

  request.interceptors.response.use(undefined, (err?: ErrorPayload) => {
    if (
      (err?.statusCode && [401, 403].includes(err.statusCode)) ||
      err?.code === '69'
    ) {
    }

    // if (err?.code === '102') {
    //   getWindow()?._jotai_?.set(blockAtom, true);
    // }

    return Promise.reject(err);
  });
}
