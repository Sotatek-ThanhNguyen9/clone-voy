export interface IVestingResponse {
  list: IListVesting[];
  count: number;
}
export interface IListVesting {
  userId: number;
  totalAmount: string;
  nextUnlockIn: number;
  availableClaim: number;
  totalVested: string;
  totalClaimed: string;
  tranche: string;
  totalPending: number;
  trancheId: number;
  duration: number;
  cliff: number;
  startDate: string | number;
  tge: string | number;
  proof: string[];
}
