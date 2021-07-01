import { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { actions as manageMessagesActions } from '../../redux/reducers'
import { EMessageType } from '../../common/enums'
import './addMessage.css'

const AddMessage: FC = () => {
  const dispatch = useDispatch()

  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [userId, setUserId] = useState('')
  const [viewType, setViewType] = useState(EMessageType.PUBLIC)

  const onChangeUserId = (e: any) => setUserId(e.target.value)
  const onChangeSubject = (e: any) => setSubject(e.target.value)
  const onChangeMessage = (e: any) => setMessage(e.target.value)
  const updateViewType = (e: any) => setViewType(e.target.value)

  const onSubmitMessage = (e: any) => {
    e.preventDefault()
    dispatch(manageMessagesActions.addMessage({ userId, subject, message, viewType }))
    setUserId('')
    setSubject('')
    setMessage('')
    setViewType(EMessageType.PUBLIC)
  }

  return (
    <div className="addMessage">
      <form className="form" onSubmit={onSubmitMessage}>
        <label>User name</label>
        <input className="input" placeholder="user name" value={userId} onChange={onChangeUserId} />
        <label>subject</label>
        <input className="input" placeholder="subject" value={subject} onChange={onChangeSubject} />
        <label>Message</label>
        <textarea className="input" value={message} onChange={onChangeMessage} />
        <label htmlFor="messageType">
          View Type
          <select
            className="input"
            id="viewType"
            value={viewType}
            onChange={updateViewType}
            onBlur={updateViewType}
          >
            {[EMessageType.PUBLIC, EMessageType.PRIVATE].map((viewType) => (
              <option key={viewType} value={viewType}>
                {viewType}
              </option>
            ))}
          </select>
        </label>

        <button type="submit">send !</button>
      </form>
    </div>
  )
}

export default AddMessage
