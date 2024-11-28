import {
  LoyaltyAccountStatus,
  LoyaltyBalanceStatus,
  REQUEST_PROGRAM_STATUS,
} from '../common';

declare namespace AwardWallet {
  interface ProgramBalance {
    id: number;
    code: string;
    amount?: number;
    balance: string;
    expiresBalanceAt?: string;
    level?: string;
    status: LoyaltyBalanceStatus;
    createdAt: string;
    updatedAt: string;
    loyaltyAccountStatus: LoyaltyAccountStatus;
    loyaltyProgramId: number;
    accountId?: string | number;
    loyaltyAccountId?: string | number;
    isUpdating: number;
    name: string;
    type: number;
    claimedAt?: string;
    provider?: string;
    requestAdminStatus: REQUEST_PROGRAM_STATUS;
    imageUrl?: string;
    reasonReject?: string;
  }

  interface Program {
    id: number;
    name: string;
    type: number;
    provider: string;
    exchange_rate: number;
    limit: number;
    code: string;
    status: LoyaltyBalanceStatus;
    loyaltyAccountStatus: LoyaltyAccountStatus;
    expiresBalanceAt?: string;
    requestAdminStatus: REQUEST_PROGRAM_STATUS;
    imageUrl?: string;
    reasonReject?: string;
  }

  interface ProgramOption {
    code: string;
    kind: string;
    name: string;
  }

  interface ProgramField {
    code: string;
    title: string;
    options: ProgramOption[];
    required: true;
    defaultValue: string;
  }

  interface ProgramDetail extends Program {
    login: ProgramField | null;
    login2: ProgramField | null;
    login3: ProgramField | null;
    password: ProgramField | null;
  }

  interface Match {
    id: number;
    userId: number;
    balance: string;
    amount: string;
    loyaltyProgramName: string;
    createdAt: string;
  }

  interface LoginLoyaltyProgram {
    loyaltyProgramId: number;
    username?: string;
    password?: string;
  }

  interface LoginLoyaltyProgramResponse {}

  interface LoyaltyBalancesResponse {
    list: ProgramBalance[];
    count: number;
  }
  interface LoyaltyProgramsResponse {
    list: Program[];
    count: number;
  }
  interface MatchHistoriesResponse {
    list: PointMatched[];
    count: number;
  }

  interface ConnectMSG {
    loyaltyProgramId: number;
    address: string;
    event: string;
  }

  // NEW
  interface PointMatched {
    id: number;
    balance: string;
    amount: string;
    level: string;
    expiration: string;
    loyaltyProgramName: string;
    createdAt: string;
  }

  interface AddLoyaltyProgramResponse {
    name: string;
    type: number;
    provider: string;
    exchangeRate: number;
    limit: number;
    code?: string;
    id: number;
  }

  interface RequestProgram {
    id: number;
    userId: number;
    name: string;
    email: string;
    loyaltyProgramId: number;
    loyaltyProgramName: string;
    createdAt: string;
    balance: string;
    reasonReject: string | null;
    provider: string;
    code: string | null;
    requestAdminStatus: REQUEST_PROGRAM_STATUS;
    imageUrl: string | null;
    requestAdminDate: string;
  }

  interface RequestProgramResponse {
    list: RequestProgram[];
    count: number;
  }
}

export default AwardWallet;
