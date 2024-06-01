import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

function Layout({children}) {
  return (
    <div className="flex flex-col h-screen ">
        <Sidebar/>
        <main className='flex-grow'>{children}</main>
    </div>
  )
}

export default Layout