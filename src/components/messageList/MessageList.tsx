import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './messageList.css'
import { IMessage, IState } from '../../common/intefaces'
import { EMessageType } from '../../common/enums'
import { actions } from '../../redux/reducers'
function MessageList() {
  const messages = useSelector((state: IState) => state.messages)
  const dispatch = useDispatch()

  const selectMessage = (userId: string): void => {
    const selectedMessage = messages.find(
      (currentMessage: IMessage) => currentMessage.userId === userId
    )
    dispatch(actions.selectMessage(selectedMessage))
  }

  return (
    <div className="messageList">
      <div>All messages:</div>
      {messages?.length &&
        messages.map(({ subject, message, userId = '', viewType }: IMessage) => {
          if (viewType === EMessageType.PRIVATE) {
            return null
          }

          return (
            <div key={userId} className="messagePart">
              <button onClick={() => selectMessage(userId)}>Focus the input</button>
              <p>subject: {subject}</p>
              <p>message: {message}</p>
              <p>user: {userId}</p>
              <p>viewType: {viewType}</p>
            </div>
          )
        })}
    </div>
  )
}

export default MessageList
