import { lazy, Suspense } from 'react'
import { Provider, useDispatch } from 'react-redux'
import { store } from './redux/store'
import { fetchMessages } from './redux/manageMessagesSlice'
import './App.css'

const AddMessageComponent = lazy(() => import('./components/addMessage/AddMessage'))
const MessageList = lazy(() => import('./components/messageList/MessageList'))
const Message = lazy(() => import('./components/message/Message'))

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
      <Suspense fallback={<div>Loading...</div>}>
        <AddMessageComponent />
      </Suspense>
      <div style={{ display: 'flex', flexDirection: 'row', flex: '1 1 50%' }}>
        <Suspense fallback={<div>Loading...</div>}>
          <MessageList />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Message />
        </Suspense>
      </div>
    </div>
  )
}

export default App
