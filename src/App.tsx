import React from 'react'
import { Provider, useDispatch } from 'react-redux'
import AddMessage from './components/addMessage/AddMessage'
import { store } from './redux/store'
import './App.css'
import MessageList from './components/messageList/MessageList'
import Message from './components/message/Message'
import { fetchMessages } from './redux/manageMessagesSlice'

const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  )
}

const AppContent = () => {
  const dispatch = useDispatch()
  // to retrieve existing messages from the api /message
  dispatch(fetchMessages())

  return (
    <div className="App">
      <AddMessage />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <MessageList />
        <Message />
      </div>
    </div>
  )
}

export default App
