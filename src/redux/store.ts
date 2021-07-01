import { configureStore } from '@reduxjs/toolkit'
import { reducer as manageMessages } from './reducers'

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
export const store = configureStore({ reducer: manageMessages })
