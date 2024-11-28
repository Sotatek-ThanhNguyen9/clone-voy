import { ROLE_ACCOUNT } from '../utils';

export interface LoginResponse {
  access_token: string;
  refresh_token: string;
  expiresIn: string;
  user: {
    address: string;
    role: ROLE_ACCOUNT;
    permissions: string[];
  };
}
