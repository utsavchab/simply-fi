import React from 'react'
import './Navbar.css'
import Button from '../Button/Button'
import { useDispatch } from 'react-redux'
import { getUserInfo, logoutUser } from '../../features/userInfo/userInfoSlice'
interface NavbarProps {
  userName?: string
}

const Navbar: React.FC<NavbarProps> = ({ userName }) => {
  const dispatch = useDispatch()

  const handleLogin = () => {
    dispatch(getUserInfo())
  }
  const handleLogOut = () => {
    dispatch(logoutUser())
  }
  return (
    <nav className="navbar">
      <h1>SimplyFI</h1>
      <ul>
        {userName ? (
          <>
            <li>Welcome! {userName}</li>
            <li>
              <Button text="Logout" onClick={handleLogOut}></Button>
            </li>
          </>
        ) : (
          <li>
            <Button text="Login" onClick={handleLogin}></Button>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
