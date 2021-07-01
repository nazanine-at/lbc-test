import React, { useEffect } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import AddMessage from './components/addMessage/AddMessage'
import { store } from './redux/store'
import './App.css'
import MessageList from './components/messageList/MessageList'
import Message from './components/message/Message'
import { fetchMessages } from './redux/reducers'
import { IState } from './common/intefaces'

const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  )
}

const AppContent = () => {
  const dispatch = useDispatch()
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
