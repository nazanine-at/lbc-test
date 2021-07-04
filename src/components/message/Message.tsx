import React from 'react'
import './message.css'
import { useDispatch, useSelector } from 'react-redux'
import { unselectMessage } from '../../redux/manageMessagesSlice'
import { IState } from '../../common/intefaces'

function Message() {
  const dispatch = useDispatch()
  const { subject, userId, message } = useSelector((state: IState) => state.selectedMessage)

  const unClickDelete = () => dispatch(unselectMessage())

  // userId should be unique and is mandatory
  if (!userId) {
    return null
  }

  return (
    <div className="message">
      <button onClick={() => unClickDelete()}>delete</button>
      {subject && <p>{subject}</p>}
      {userId && <p>{userId}</p>}
      {message && <p>{message}</p>}
    </div>
  )
}

export default Message
