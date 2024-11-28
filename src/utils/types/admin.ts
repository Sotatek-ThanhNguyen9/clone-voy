export interface IInvestorResponse {
  list: IListInvestors[];
  count: number;
}
export interface IListInvestors {
  userId: number;
  address: string;
  email: string;
  name: string;
  totalAmount: string;
  totalClaimed: string;
  totalVested: string;
  tranche: string;
}

export interface ITokenomicResponse {
  list: IListTokenomics[];
  count: number;
  startDate: number;
}

export interface IListTokenomics {
  id: number;
  allocation: string;
  cliff: number;
  createdAt: string;
  linearVesting: number;
  tge: string;
  totalAmount: string | number;
  updatedAt: string;
  tranche: string;
}

export interface IPoolDashboardStake {
  address: string;
  chainId: number;
  earnType: number;
  id: number;
  name: string;
  stakedAmount: number;
  stakingAmount: number;
  symbol: string;
  totalReward: number;
  totalStaker: number;
}
