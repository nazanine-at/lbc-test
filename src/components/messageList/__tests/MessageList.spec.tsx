import React from 'react'
import { render, screen } from '@testing-library/react'
import MessageList from '../MessageList'
import { Provider } from 'react-redux'
import { mockStore } from '../../../common/tests'
import { initialState } from '../../../redux/manageMessagesSlice'
const store = mockStore(initialState)

const { container } = render(
  <Provider store={store}>
    <MessageList />
  </Provider>
)

test('<MessageList/>', () => {
  expect(container).toMatchSnapshot()
})
