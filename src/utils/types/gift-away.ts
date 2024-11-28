import Code from './codes';

declare namespace GiftAway {
  interface Info {
    id: number;
    type: number;
    infoDetail: Code.Info;
    name: string;
    email?: string;
    point: string;
    createdAt: string;
    updatedAt: string;
  }

  interface GiftAwayResponse {
    list: Info[];
    count: number;
  }
}

export default GiftAway;
