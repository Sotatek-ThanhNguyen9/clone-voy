import { TX_TYPE } from '../common';

export interface IListStakingResponse {
  list: IListStaking;
  count: number;
}

export interface IStakingDetailResponse {
  items: IStakingDetail[];
  meta?: {
    currentPage: number;
    itemCount: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
  };
}

export interface IListStaking {
  address: string;
  earnType: number;
  name: string;
  stakedAmount: number;
  stakingAmount: number;
  symbol: string;
  totalReward: number;
}

export interface IStakingDetail {
  id: number;
  type: number;
  txid: string;
  userAddress: string;
  tokenAddress: string;
  amount: string;
  status: number;
  isInternal: boolean;
  endTimeLock: string;
  isProcessed: boolean;
  chainId: number;
  apr: string;
  timeLock: number;
  startTimeLock: string;
  provisionalInterest: number;
  estReward: string;
  isClaimCoin: boolean;
  isClaimed: number;
  isWithdrawn: number;
  createdAt: string;
  updatedAt: string;
  symbol: string;
  indexTxSc: number;
}

export interface IDepositCoin {
  type: TX_TYPE;
  txid: string;
  chainId: number;
  apr?: number;
  timeLock?: number;
  isClaimCoin?: boolean;
  transactionId?: number;
  tokenAddress?: string;
  amount?: number;
}

export interface IEstimateRewardResponse {
  apr: number;
  estPoint: number;
}
