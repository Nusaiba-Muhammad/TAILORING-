import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import MainNavbar from './MainApp/MainNavbar'

export default function AuthNavigation() {
  return (
    <div>
      <MainNavbar />
        <Outlet />
        <Footer />
    </div>
  )
}
