import manageMessagesReducer, {
  unselectMessage,
  selectMessage,
  addMessage,
} from './manageMessagesSlice'
import { IMessage, IState } from '../common/intefaces'
import { EMessageType } from '../common/enums'

describe('manageMessages reducer', () => {
  const initialState: IState = {
    messages: [],
    selectedMessage: {},
  }
  const newMessage = (id = '1') => ({
    userId: `user${id}`,
    subject: `subject${id}`,
    message: `message content${id}`,
    viewType: EMessageType.PUBLIC,
  })

  it('should handle initial state', () => {
    expect(manageMessagesReducer(undefined, { type: 'unknown' })).toEqual({
      messages: [],
      selectedMessage: {},
    })
  })

  it('should handle addMessage', () => {
    expect(manageMessagesReducer(undefined, addMessage(newMessage()))).toEqual({
      messages: [newMessage()],
      selectedMessage: {},
    })
  })

  it('should handle addMessageActions', () => {
    const state: IState = {
      messages: [newMessage('1')],
      selectedMessage: {},
    }
    expect(manageMessagesReducer(state, addMessage(newMessage('2')))).toEqual({
      messages: [newMessage('1'), newMessage('2')],
      selectedMessage: {},
    })
  })

  it('should handle selectMessage', () => {
    const state = {
      messages: [],
      selectedMessage: newMessage('2'),
    }
    expect(manageMessagesReducer(initialState, selectMessage(newMessage()))).toEqual({
      messages: [],
      selectedMessage: newMessage(),
    })
  })

  it('should handle unselectMessage', () => {
    const state: IState = {
      messages: [],
      selectedMessage: newMessage('1'),
    }

    expect(manageMessagesReducer(state, unselectMessage())).toEqual({
      messages: [],
      selectedMessage: {},
    })
  })
})
