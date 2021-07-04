import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './messageList.css'
import { IMessage, IState } from '../../common/intefaces'
import { EMessageType } from '../../common/enums'
import { selectMessage as selectMessageAction } from '../../redux/manageMessagesSlice'
function MessageList() {
  const messages = useSelector((state: IState) => state.messages)
  const dispatch = useDispatch()
  const [showPrivateMessages, setShowPrivateMessages] = useState(false)

  const selectMessage = (userId: string): void => {
    // find clicked message by userId which should be unique
    const selectedMessage = messages.find(
      (currentMessage: IMessage) => currentMessage.userId === userId
    )
    dispatch(selectMessageAction(selectedMessage))
  }

  const setRestriction = () => {
    // change privacy rule to show or hide private message
    setShowPrivateMessages(!showPrivateMessages)
  }

  if (!messages.length) {
    return null
  }

  return (
    <div className="messageList">
      <button onClick={setRestriction}>
        {showPrivateMessages ? 'Hide Private Messages' : 'Show Private Messages'}
      </button>
      {messages.map(({ subject, message, userId = '', viewType }: IMessage) => {
        if (viewType?.toUpperCase() === EMessageType.PRIVATE && !showPrivateMessages) {
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
