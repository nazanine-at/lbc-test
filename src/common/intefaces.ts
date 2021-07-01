import { EMessageType } from './enums'

export interface IState {
  messages: IMessage[]
  selectedMessage: IMessage
}

export interface IMessage {
  userId?: string
  subject?: string
  message?: string
  viewType?: EMessageType
}
