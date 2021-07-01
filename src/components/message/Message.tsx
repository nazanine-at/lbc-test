import React from 'react'
import './message.css'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../redux/reducers'
import { IState } from '../../common/intefaces'

function Message() {
  const dispatch = useDispatch()
  const { subject, userId, message, viewType } = useSelector(
    (state: IState) => state.selectedMessage
  )
  const unClickDelete = () => dispatch(actions.unselectMessage())
  if (!userId) {
    return null
  }

  return (
    <div className="message">
      <button onClick={() => unClickDelete()}>delete</button>
      {subject && <p>{subject}</p>}
      {userId && <p>{userId}</p>}
      {message && <p>{message}</p>}
      {viewType && <p>{viewType}</p>}
    </div>
  )
}

export default Message
