import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import SideBar from './components/SideBar'
import Home from './components/Home'
import PassBook from './components/PassBook'
import { getUserInfo } from './features/userInfo/userInfoSlice'
import { useDispatch, useSelector } from 'react-redux'
import { stateType } from './store'

const App: React.FC = () => {
  const dispatch = useDispatch()
  const userInfo = useSelector((state: stateType) => state.userInfo)
  useEffect(() => {
    dispatch(getUserInfo())
  }, [dispatch])

  return (
    <div className="App">
      <Router>
        <Navbar userName={userInfo.name} />
        <SideBar />
        <div className="main-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/passbook" element={<PassBook />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
