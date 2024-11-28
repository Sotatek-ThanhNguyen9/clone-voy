import { TYPE_CODE } from '../common';

declare namespace Code {
  interface Info {
    id?: number;
    name: string;
    redirectUrl?: string;
    type: TYPE_CODE;
    amount: number | string;
    startTime: string;
    endTime: string;
    messageSuccess: Message[];
    landingPageMessage?: Message[];
    redeemLimit: number | string;
    status: boolean;
    code?: string;
    link?: string;
    createdAt?: string;
    updatedAt?: string;
    totalRedeem?: string;
  }

  interface CodesResponse {
    items: Info[];
    count: number;
  }

  interface Message {
    lang: string;
    message: string;
  }

  interface Permission {
    id: number;
    name: String;
  }
}

export default Code;
