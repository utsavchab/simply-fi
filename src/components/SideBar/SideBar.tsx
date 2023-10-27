import React from 'react'
import { useNavigate } from 'react-router-dom'
import './SideBar.css'

const SideBar: React.FC = () => {
  const navigateTo = useNavigate()

  const moveToHome = () => {
    navigateTo('/') // Navigate to the Home route
  }

  const moveToPassBook = () => {
    navigateTo('/passbook') // Navigate to the Passbook route
  }

  return (
    <div className="sidebar">
      <div className="sidebar-option" onClick={moveToHome}>
        Home
      </div>
      <div className="sidebar-option" onClick={moveToPassBook}>
        Passbook
      </div>
    </div>
  )
}

export default SideBar
