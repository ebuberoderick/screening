import React from 'react'
import SideNav from '../molecules/SideNav'

function AppLayout({ children }) {
  return (
    <div>
        <SideNav />
        <div className='ml-64 p-8'>{children}</div>
    </div>
  )
}

export default AppLayout