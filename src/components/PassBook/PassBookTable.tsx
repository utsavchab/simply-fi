import React from 'react'
import { useSelector } from 'react-redux'
import Button from '../Button'
import { stateType } from '../../store'
import { format } from 'date-fns'

interface Transaction {
  counterPartName: string
  date: Date
  referenceNo: string
  amount: number
}

const PassBookTable: React.FC = () => {
  const { transactions, currentBalance } = useSelector(
    (state: stateType) => state.passbook
  )
  return (
    <div>
      <Button
        text="Add Transaction"
        onClick={() =>
          window.alert(
            'Send post request to the server to add transaction and see it in the below table'
          )
        }
      ></Button>
      <div>Current Balance : {currentBalance}</div>
      <table className="transaction-table">
        <thead>
          <tr>
            <th>Counterparty</th>
            <th>Date</th>
            <th>Reference No</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction: Transaction, index: number) => (
            <tr key={index}>
              <td>{transaction.counterPartName}</td>
              <td>
                {(() => {
                  const date = new Date(transaction.date)

                  return format(date, 'dd/MM/yyyy hh:mm:ss')
                })()}
              </td>
              {/* Format the date as needed */}
              <td>{transaction.referenceNo}</td>
              <td>${transaction.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PassBookTable
