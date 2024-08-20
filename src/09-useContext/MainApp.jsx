import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Navbar from './Navbar'
import HomePage from './HomePage'
import LoginPage from './LoginPage'
import AboutPage from './AboutPage'
import UserProvider from './context/UserProvider'

const MainApp = () => {
  return (
    <UserProvider>
        <Navbar />
        <hr />

        <Routes>
          <Route path='/' element={ <HomePage/> } />
          <Route path='/about' element={ <AboutPage /> } />
          <Route path='/login' element={ <LoginPage /> } />
          
          <Route path='/*' element={ <Navigate to='/about' /> } />

        </Routes>
    </UserProvider>
  )
}

export default MainApp
