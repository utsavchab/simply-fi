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

  if (userInfo.isLoading) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1>SimplyFi</h1>
        <p> Please Wait Loading...</p>
      </div>
    )
  }

  if (userInfo.isError) {
    return (
      <div className="App">
        <Navbar userName={userInfo.name} />
        <h1>Server is Down</h1>
      </div>
    )
  }
  return (
    <div className="App">
      <Router>
        <Navbar userName={userInfo.name} />
        {userInfo.isError ? (
          <h1>Server is Down</h1>
        ) : (
          <>
            <SideBar />

            <div className="main-screen">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/passbook" element={<PassBook />} />
              </Routes>
            </div>
          </>
        )}
      </Router>
    </div>
  )
}

export default App
