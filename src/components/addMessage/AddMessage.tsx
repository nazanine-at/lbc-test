import { FC, useState, FormEvent, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { addMessage } from '../../redux/manageMessagesSlice'
import { EMessageType } from '../../common/enums'
import './addMessage.css'

const AddMessage: FC = () => {
  const dispatch = useDispatch()

  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [userId, setUserId] = useState('')
  const [viewType, setViewType] = useState(EMessageType.PUBLIC)

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value)
  const onChangeSubject = (e: ChangeEvent<HTMLInputElement>) => setSubject(e.target.value)
  const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)
  const updateViewType = (e: ChangeEvent<HTMLSelectElement>) => {
    const element = e.target as HTMLSelectElement
    setViewType(element.value as EMessageType)
  }

  const onSubmitMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(addMessage({ userId, subject, message, viewType }))
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
