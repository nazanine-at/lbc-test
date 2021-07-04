/**
 * This is a reducer - a function that takes a current state value and an
 * action object describing "what happened", and returns a new state value.
 * A reducer's function signature is: (state, action) => newState
 *
 * The Redux state should contain only plain JS objects, arrays, and primitives.
 * The root state value is usually an object.  It's important that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * You can use any conditional logic you want in a reducer. In this example,
 * we use a switch statement, but it's not required.
 */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IState } from '../common/intefaces'

export const fetchMessages = createAsyncThunk('fetchMessages', async () => {
  const res = await fetch('/messages')
  return res.json()
})

export const initialState: IState = {
  messages: [],
  selectedMessage: {},
}

const manageMessagesSlice = createSlice({
  name: 'manageMessages',
  initialState,
  reducers: {
    addMessage: (state: IState, { payload }): void => {
      state.messages = [...state.messages, payload]
    },
    selectMessage: (state: IState, { payload }): void => {
      state.selectedMessage = payload
    },
    unselectMessage: (state: IState): void => {
      state.selectedMessage = {}
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMessages.fulfilled, (state, { payload }) => {
      state.messages = payload
    })
    builder.addCase(fetchMessages.rejected, (state) => {
      state.messages = []
    })
  },
})

export const { unselectMessage, selectMessage, addMessage } = manageMessagesSlice.actions
export default manageMessagesSlice.reducer
