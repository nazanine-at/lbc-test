import React from 'react'
import { render } from '@testing-library/react'
import AddMessage from '../AddMessage'
import { Provider } from 'react-redux'
import { mockStore } from '../../../common/tests'
import { initialState } from '../../../redux/manageMessagesSlice'

test('<AddMessage/>', () => {
  const store = mockStore(initialState)

  const { container } = render(
    <Provider store={store}>
      <AddMessage />
    </Provider>
  )
  expect(container).toMatchSnapshot()
})
