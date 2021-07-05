import React from 'react'
import './message.css'
import { useDispatch, useSelector } from 'react-redux'
import { unselectMessage } from '../../redux/manageMessagesSlice'
import { IState } from '../../common/intefaces'

function Message() {
  const dispatch = useDispatch()
  // get selectedMessage information from redux state
  const { subject, userId, message } = useSelector((state: IState) => state.selectedMessage)

  const unClickDelete = () => dispatch(unselectMessage())

  // userId should be unique and is mandatory
  if (!userId) {
    return null
  }

  return (
    <div className="message">
      <div className="messageContent">
        <button onClick={unClickDelete}>Close</button>
        {subject && <p>{subject}</p>}
        {userId && <p>{userId}</p>}
        {message && <p>{message}</p>}
      </div>
    </div>
  )
}

export default Message
