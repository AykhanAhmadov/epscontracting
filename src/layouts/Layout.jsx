import React from 'react'
import Header from '../components/header/Header'
import { Outlet } from 'react-router-dom'
import BackToTop from '../components/backToTop/BackToTop'

const Layout = () => {
  return (
   <>
    <Header/>
    <main>
        <Outlet/>
    </main>
    <footer>
      <BackToTop/>
    </footer>
   </>
  )
}

export default Layout