import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import './Layout.css'
import { Outlet } from 'react-router-dom'

function Layout({children}) {
  return (
    <div className="layout_container">
        <Sidebar/>
        <main className=' flex-1 flex-col w-full h-screen'>{children}</main>
    </div>
  )
}

export default Layout