'use client'
import React from 'react'
import SideNav from '../molecules/SideNav'
import { useRouter } from 'next/navigation'

function AppLayout({ children }) {
  const router = useRouter()
  const isAuthenticated = localStorage.screeningAuthState

  if (!isAuthenticated) {
    router.push("/auth/login")
  }
  return (
    <div>
        <SideNav />
        <div className='ml-64 p-8 select-none'>{children}</div>
    </div>
  )
}

export default AppLayout