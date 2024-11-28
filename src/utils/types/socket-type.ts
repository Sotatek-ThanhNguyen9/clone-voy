import { SocketEvent } from '../constants/socket-type';

export type BaseMessageType<Event extends SocketEvent> = {
  type: SocketEvent;
  room: string;
  message: Event extends never ? never : any;
};
export type BaseMessage<Event extends SocketEvent = any> =
  Event extends BaseMessageType<SocketEvent> ? Event : BaseMessageType<Event>;
