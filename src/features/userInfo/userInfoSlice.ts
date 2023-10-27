import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import customFetch from '../../customFetch'

import {
  resetPassbookDetails,
  setPassbookDetails,
} from '../passbook/passbookSlice'
interface userInfo {
  name: string
  accountNumber: string
  ifscCode: string
  isLoading: boolean
  isError: boolean
}

const initialState: userInfo = {
  name: '',
  accountNumber: '',
  ifscCode: '',
  isLoading: false,
  isError: false,
}

export const getUserInfo: any = createAsyncThunk(
  'userInfo/fetchDetails',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const response = await customFetch.get('/passbook/0192837465') // By default user with account number 0192837465 is fetched. (Login page is not created, Only one user access.)
      const userData = response.data.data

      dispatch(setPassbookDetails(userData.transactions))
      return response.data.data
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
)

export const logoutUser: any = createAsyncThunk(
  'userInfo/logoutUser',
  (_, { rejectWithValue, dispatch }) => {
    try {
      dispatch(resetPassbookDetails())
      return initialState
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
)

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserInfo.pending, (state) => {
        state.isLoading = true
        state.isError = false
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.name = action.payload.name
        state.accountNumber = action.payload.accountNumber
        state.ifscCode = action.payload.ifscCode
        state.isLoading = false
        state.isError = false
      })
      .addCase(getUserInfo.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        window.alert('Server is Down')
        console.error(`Error: ${action.payload}`)
      })
      .addCase(logoutUser.fulfilled, () => {
        return initialState
      })
  },
})

export default userInfoSlice.reducer
