import Code from './codes';

declare namespace NUserActivity {
  interface Info {
    id: number;
    name: string;
    email: string | null;
    createdAt: string;
    amount: string;
    code: string | null;
  }

  interface Details {
    id: number;
    role: number;
    name: string;
    address: string;
    email: string | null;
    pointBalance: string;
    statusLoginAward: number;
    userIdAward: string | null;
    firstName: string | null;
    lastName: string | null;
    isConnectWallet: false;
    typeLogin: number;
    updatedAt: string | null;
    refreshAwBalanceAt: string | null;
    createdAt: string;
  }

  interface ListUsersResponse {
    list: Info[];
    count: number;
  }

  interface CodeInfo {
    id: number;
    userId: number;
    loyaltyProgramId: null;
    balance: string;
    type: number;
    amount: string;
    infoDetail: Code.Info;
    createdAt: string;
    updatedAt: string | null;
  }

  interface ListUserCodesResponse {
    items: CodeInfo[];
    meta: {
      totalItems: number;
      itemCount: number;
      itemsPerPage: number;
      totalPages: number;
      currentPage: number;
    };
  }

  interface ChartResponse {
    totalActiveUsers: number;
    dataNewMembers: {
      time_start: string;
      user_count: string;
    }[];
    dataActiveMembers: {
      time_start: string;
      user_count: string;
    }[];
  }
}

export default NUserActivity;
