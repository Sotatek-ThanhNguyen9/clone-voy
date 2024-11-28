export enum Paths {
  HOME = '/',
  LOYALTY_MATCHING = '/loyalty-matching',
  VESTING = '/vesting',
  UI = '/UI',
  CONVERSION = '/purchase-point',
  STAKING = '/staking',
  BRIDGE = '/bridge',
  VOY_POINTS = '/voy-points',
  TERM_AND_CONDITIONAL = '/term-and-conditional',
  FQA = '/fqa',
  MATCH_HISTORIES = '/voy-points/match-histories',
  SIGN_IN = '/sign-in',
  SIGN_UP = '/sign-up',
  ADMIN = '/admin/vesting',
  ADMIN_INVESTOR = '/admin/vesting/investor',
  ADMIN_TOKENOMIC = '/admin/vesting/tokenomic',
  ADMIN_STAKE_MANAGEMENT = '/admin/stake-management',
  ADMIN_STAKE_MANAGEMENT_DETAIL = '/admin/stake-management/detail',
  ADMIN_CODES_MANAGEMENT = '/admin/codes',
  ADMIN_CODES_NEW = '/admin/codes/new',
  ADMIN_CODES_DETAIL = '/admin/codes/detail',
  ADMIN_CODES_EDIT = '/admin/codes/edit',
  ADMIN_GIFT_AWAY_HISTORY = '/admin/give-away-history',
  USER_ACTIVITY = '/admin/user-activity',
  USER_ACTIVITY_DETAILS = '/admin/user-activity/:id',
  ADMIN_LOYALTY_MATCHING = '/admin/loyalty-matching',
  ADMIN_LOYALTY_MATCHING_DETAILS = '/admin/loyalty-matching/:id',
}

export enum ItemVesting {
  TRANCHE = 'Tranche',
  TOTAL_AMOUNT = 'Total Amount',
  NEXT_UNLOCK = 'Next Unlock',
  TOKENS_VESTED = 'Tokens Vested',
  TOKENS_PENDING = 'Tokens Pending',
  TOKENS_CLAIMED = 'Tokens Claimed',
  AVAILABLE_TO_CLAIM = 'Available to Claim',
}

export enum PERMISSION_USER {
  ONLY_STAKE = 'STAKE',
  ONLY_VESTING = 'VEST',
  ALL = 'STAKE, VEST',
}

export enum TX_TYPE {
  PURCHASE = 1,
  STAKE = 2,
  UNSTAKE = 3,
  CLAIM_COIN = 4,
  CLAIM_POINT = 5,
  WITHDRAW = 6,
}

export enum TYPE_EARN {
  COIN = 1, // Earn Voy Coin
  POINT = 2, // Earn Voy Point
}

export enum NAME_STAKE_COIN {
  VOY = 'VOY',
  RETH = 'rETH',
  SFRXETH = 'sfrxETH',
  CBETH = 'cbETH',
}

export enum ORDER_BY {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum STATUS_ACTION_TRANSACTION {
  NO_ACTION = 0,
  SUCCESS = 1,
  PENDING = 2,
}

export enum TRANSACTION_STATUS {
  PENDING = 1,
  SUCCESS = 2,
  FAIL = 3,
}

export enum StatusLoginAward {
  CONNECT_AWARD_ACC = 1,
  CONNEXT_LOYALTY = 2,
  NO_LOGIN = 3,
  UPDATING = 4,
}

export enum LoyaltyBalanceStatus {
  WAITING = 0,
  MATCHED = 1,
  NOT_AVAILABLE = 2,
}

export enum AW_CONNECT_EVENT {
  TIMEOUT_ERROR = 'TIMEOUT_ERROR',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
  EMAIL_OR_PASSWORD_WRONG = 'EMAIL_OR_PASSWORD_WRONG',
  CONNECT_SUCCESS = 'CONNECT_SUCCESS',
}

export enum LoyaltyAccountStatus {
  PENDING = 0,
  SUCCESS = 1,
  FAILURE = 2,
  MATCHED = 3,
}

export enum TYPE_CODE {
  QR_CODE = 1,
  PROMO_CODE = 2,
  HISTORY = 5,
  ZEALY_POINT = 6,
}

export enum CODE_STATUS {
  AVAILABLE = 1,
  EXPIRED = 2,
  UN_AVAILABLE = 3,
}

export enum CODE_STATE {
  ENABLE = 1,
  DISABLE = 2,
}

export enum ROLE {
  ADMIN = 1,
  USER = 2,
  OTHER = 3,
}

export enum LEVEL {
  STARTER = 'Starter',
  EXPLORER = 'Explorer',
  ADVENTURER = 'Adventurer',
  TRAVELER = 'Traveler',
  VOYAGER = 'Voyager',
}

export enum POINT_LEVEL {
  STARTER = 1500,
  EXPLORER = 3500,
  ADVENTURER = 6000,
  TRAVELER = 8500,
  VOYAGER = 1000000,
}

export enum TYPE_LOGIN_WEB3AUTH {
  EMAIL = 1,
  GOOGLE = 2,
  MICROSOFT = 3,
}

export enum ERROR_LOGIN {
  EMAIL = 1,
  GOOGLE = 2,
  MICROSOFT = 3,
}

export enum TYPE_TIME {
  LAST_4_WEEKS = '1',
  LAST_20_WEEKS = '2',
  LAST_12_MONTHS = '3',
  LIFE_TIME = '4',
}

export enum REQUEST_PROGRAM_STATUS {
  PENDING = 1,
  APPROVED = 2,
  REJECTED = 3,
}

export type WALLET_TYPE = 'MetaMask' | 'Backpack' | 'WalletConnect';
