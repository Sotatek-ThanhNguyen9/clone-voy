import { ROLE_ACCOUNT } from '../utils';
import Code from './codes';

declare namespace User {
  interface Info {
    address: string;
    role: ROLE_ACCOUNT;
    id: number;
    name: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    pointBalance: string;
    statusLoginAward: number;
    userIdAward: string;
    createdAt: string;
    updatedAt: string;
    permissions: Permission[];
    refreshAwBalanceAt?: string;
  }

  interface ClerkUser {
    isLoaded: boolean;
    isSignedIn: boolean;
    user: UserInfo;
  }

  interface UserInfo {
    pathRoot: string;
    id: string;
    externalId?: any;
    username: string;
    emailAddresses: EmailAddress[];
    phoneNumbers: any[];
    web3Wallets: any[];
    externalAccounts: ExternalAccount[];
    passkeys: any[];
    samlAccounts: any[];
    organizationMemberships: any[];
    passwordEnabled: boolean;
    firstName: string;
    lastName: string;
    fullName: string;
    primaryEmailAddressId: string;
    primaryEmailAddress: EmailAddress;
    primaryPhoneNumberId?: any;
    primaryPhoneNumber?: any;
    primaryWeb3WalletId?: any;
    primaryWeb3Wallet?: any;
    imageUrl: string;
    hasImage: boolean;
    twoFactorEnabled: boolean;
    totpEnabled: boolean;
    backupCodeEnabled: boolean;
    publicMetadata: any;
    unsafeMetadata: any;
    createOrganizationEnabled: boolean;
    deleteSelfEnabled: boolean;
    lastSignInAt: string;
    updatedAt: string;
    createdAt: string;
    cachedSessionsWithActivities?: any;
  }

  interface EmailAddress {
    pathRoot: string;
    emailAddress: string;
    linkedTo: [
      {
        pathRoot: string;
        id: string;
        type: string;
      },
    ];
    id: string;
    verification: Verification;
  }

  interface ExternalAccount {
    pathRoot: string;
    providerUserId: string;
    emailAddress: string;
    approvedScopes: string;
    firstName: string;
    lastName: string;
    imageUrl: string;
    username: string;
    publicMetadata: any;
    label?: any;
    verification: Verification;
    id: string;
    identificationId: string;
    provider: string;
  }

  interface Verification {
    pathRoot: string;
    status: string;
    strategy: string;
    nonce?: any;
    externalVerificationRedirectURL?: any;
    attempts?: any;
    expireAt: string;
    error?: {
      code: string;
      message: string;
      longMessage: string;
      meta: any;
    };
  }

  interface Reward {
    id: number;
    userId: number;
    amount: string;
    type: number;
    infoDetail: Code.Info;
    createdAt: string;
    updatedAt: string;
  }

  interface ListRewardsResponse {
    items: Reward[];
    meta: {
      totalItems: number;
      itemCount: number;
      itemsPerPage: number;
      totalPages: number;
      currentPage: number;
    };
  }

  interface Permission {
    id: number;
    name: String;
  }
}

export default User;
