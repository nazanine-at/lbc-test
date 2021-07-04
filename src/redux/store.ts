import { configureStore } from '@reduxjs/toolkit'
import manageMessagesSlice from './manageMessagesSlice'

export const store = configureStore({ reducer: manageMessagesSlice })
