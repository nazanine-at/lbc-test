import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { selectMessage as selectMessageAction } from '../../redux/manageMessagesSlice'
import './messageList.css'
import { IMessage, IState } from '../../common/intefaces'
import { EMessageType } from '../../common/enums'

function MessageList() {
  const messages = useSelector((state: IState) => state.messages)
  const dispatch = useDispatch()
  const [showPrivateMessages, setShowPrivateMessages] = useState(false)

  const selectMessage = (userId: string): void => {
    // find clicked message by userId which should be unique
    const selectedMessage = messages.find(
      (currentMessage: IMessage) => currentMessage.userId === userId
    )
    // save selectedMessage within redux state
    dispatch(selectMessageAction(selectedMessage))
  }

  const changeRestriction = () => {
    // change privacy rule to show or hide private message
    setShowPrivateMessages(!showPrivateMessages)
  }

  if (!messages.length) {
    return null
  }

  const isPrivate = (viewType = EMessageType.PUBLIC) =>
    viewType.toUpperCase() === EMessageType.PRIVATE

  return (
    <div className="messageList">
      <button onClick={changeRestriction}>
        {showPrivateMessages ? 'Hide Private Messages' : 'Show Private Messages'}
      </button>
      {messages.map(({ subject, userId = '', viewType }: IMessage) => {
        // by default private messages should be hidden unless the rule has been changed in changeRestriction
        if (isPrivate(viewType) && !showPrivateMessages) {
          return null
        }

        return (
          <div
            key={userId}
            className="messagePart"
            style={{
              color: isPrivate(viewType) ? '#c88f8f' : '#ccc',
            }}
          >
            <button onClick={() => selectMessage(userId)}>Open the message</button>
            <p>subject: {subject}</p>
            <p>user: {userId}</p>
            {isPrivate(viewType) && <p>{viewType} message</p>}
          </div>
        )
      })}
    </div>
  )
}

export default MessageList
