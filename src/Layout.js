import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header'
import Nav from './Components/Nav'
import Footer from './Components/Footer'


const Layout = ({search, setSearch}) => {
  return (
    <div className="App">
        <Header />
        <Nav search={search} setSearch={setSearch} />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout