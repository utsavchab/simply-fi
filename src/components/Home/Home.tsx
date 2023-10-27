import React from 'react'
import { useSelector } from 'react-redux'

const Home: React.FC = () => {
  const currentBalance = 23
  const user = useSelector((state: any) => {
    return state.userInfo
  })

  return (
    <div className="home">
      <h2>Welcome, {user.name}</h2>
      <p>Account Number: {user.accountNumber}</p>
      <p>IFSC Code: {user.ifscCode}</p>
      <p>Current Balance: ${currentBalance.toFixed(2)}</p>
    </div>
  )
}

export default Home
