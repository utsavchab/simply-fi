import { configureStore } from '@reduxjs/toolkit'
import passbookReducer from './features/passbook/passbookSlice'
import userInfoReducer from './features/userInfo/userInfoSlice'

const store = configureStore({
  reducer: {
    // Add reducers here
    userInfo: userInfoReducer,
    passbook: passbookReducer,
  },
})

export type stateType = ReturnType<typeof store.getState>
export default store
