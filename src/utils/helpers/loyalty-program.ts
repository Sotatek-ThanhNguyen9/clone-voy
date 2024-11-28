import moment from 'moment';
import {
  LoyaltyAccountStatus,
  LoyaltyBalanceStatus,
  REQUEST_PROGRAM_STATUS,
} from '../common';

export enum PROGRAM_BALANCE_STATUS {
  CONNECTING = 1,
  UPLOAD = 2,
  REQUEST_PENDING = 3,
  MATCH = 4,
  REJECTED = 5,
  MATCHED = 6,
  UPDATING = 7,
  EXPIRED = 8,
  IDLE = 9,
}

export const getStatus = (
  loyaltyAccountStatus?: LoyaltyAccountStatus,
  requestAdminStatus?: REQUEST_PROGRAM_STATUS,
  expiresBalanceAt?: string,
  status?: LoyaltyBalanceStatus,
  provider?: string,
  imageUrl?: string,
  isUpdating?: number,
) => {
  if (isUpdating === 1) {
    return PROGRAM_BALANCE_STATUS.UPDATING;
  }

  const isExpired =
    !!expiresBalanceAt && moment(expiresBalanceAt).isBefore(moment.now());

  if (isExpired) return PROGRAM_BALANCE_STATUS.EXPIRED;

  switch (loyaltyAccountStatus) {
    case LoyaltyAccountStatus.PENDING:
      return PROGRAM_BALANCE_STATUS.CONNECTING;
    case LoyaltyAccountStatus.FAILURE:
      return getStatusUpload(requestAdminStatus, imageUrl, status);
    case LoyaltyAccountStatus.MATCHED:
      return PROGRAM_BALANCE_STATUS.MATCHED;
    case LoyaltyAccountStatus.SUCCESS:
      return getStatusWhenSuccess(requestAdminStatus, status, imageUrl);
    default:
      return getStatusWhenDefault(
        requestAdminStatus,
        status,
        provider,
        imageUrl,
      );
  }
};

const getStatusUpload = (
  requestAdminStatus?: REQUEST_PROGRAM_STATUS,
  imageUrl?: string,
  status?: LoyaltyBalanceStatus,
) => {
  if (status === LoyaltyBalanceStatus.MATCHED)
    return PROGRAM_BALANCE_STATUS.MATCHED;
  if (!imageUrl) {
    return PROGRAM_BALANCE_STATUS.UPLOAD;
  }
  switch (requestAdminStatus) {
    case REQUEST_PROGRAM_STATUS.PENDING:
      return PROGRAM_BALANCE_STATUS.REQUEST_PENDING;
    case REQUEST_PROGRAM_STATUS.APPROVED:
      return PROGRAM_BALANCE_STATUS.MATCH;
    case REQUEST_PROGRAM_STATUS.REJECTED:
      return PROGRAM_BALANCE_STATUS.REJECTED;
    default:
      return PROGRAM_BALANCE_STATUS.UPLOAD;
  }
};

const getStatusWhenSuccess = (
  requestAdminStatus?: REQUEST_PROGRAM_STATUS,
  status?: LoyaltyBalanceStatus,
  imageUrl?: string,
) => {
  switch (status) {
    case LoyaltyBalanceStatus.NOT_AVAILABLE:
      return getStatusUpload(requestAdminStatus, imageUrl, status);
    case LoyaltyBalanceStatus.MATCHED:
      return PROGRAM_BALANCE_STATUS.MATCHED;
    default:
      return PROGRAM_BALANCE_STATUS.MATCH;
  }
};

const getStatusWhenDefault = (
  requestAdminStatus?: REQUEST_PROGRAM_STATUS,
  status?: LoyaltyBalanceStatus,
  provider?: string,
  imageUrl?: string,
) => {
  switch (status) {
    case LoyaltyBalanceStatus.NOT_AVAILABLE:
      return getStatusUpload(requestAdminStatus, imageUrl, status);
    case LoyaltyBalanceStatus.WAITING:
      if (provider === 'Manual' || provider === 'Other') {
        return getStatusUpload(requestAdminStatus, imageUrl, status);
      }
      return PROGRAM_BALANCE_STATUS.CONNECTING;
    case LoyaltyBalanceStatus.MATCHED:
      return PROGRAM_BALANCE_STATUS.MATCHED;
    default:
      return PROGRAM_BALANCE_STATUS.IDLE;
  }
};
