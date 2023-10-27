import { createSlice } from '@reduxjs/toolkit'

interface Transaction {
  counterPartName: string
  date: Date
  referenceNo: string
  amount: number
}

interface PassbookState {
  currentBalance: number
  transactions: Transaction[]
  isLoading: boolean
  isError: boolean
}

const initialState: PassbookState = {
  currentBalance: 0,
  transactions: [],
  isLoading: true,
  isError: false,
}
const passbookSlice = createSlice({
  name: 'passbook',
  initialState,
  reducers: {
    setPassbookDetails: (state, action) => {
      state.transactions = action.payload
      state.currentBalance = state.transactions.reduce(
        (total, transaction: Transaction) => {
          total += transaction.amount
          return total
        },
        0 // total = 0 Initially
      )
      state.isLoading = false
      state.isError = false
    },
    resetPassbookDetails: () => {
      return initialState
    },
  },
})

export default passbookSlice.reducer
export const { setPassbookDetails, resetPassbookDetails } =
  passbookSlice.actions
