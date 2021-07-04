import React from 'react'
import { render } from '@testing-library/react'
import Message from '../Message'
import { Provider } from 'react-redux'
import { mockStore } from '../../../common/tests'
import { initialState } from '../../../redux/manageMessagesSlice'

test('<Message/>', () => {
  const store = mockStore(initialState)

  const { container } = render(
    <Provider store={store}>
      <Message />
    </Provider>
  )
  expect(container).toMatchSnapshot()
})
