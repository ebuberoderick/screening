'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

function AuthLayout({children}) {
    
  const router = useRouter()
  const isAuthenticated = false 

  if (isAuthenticated) {
    router.push("/overview")
  }
  return (
    <div className='h-screen w-screen bg-gray-100 flex items-center'>
        <div className='w-full'>
            <div className='max-w-lg mx-auto p-10 bg-white rounded-lg'>{children}</div>
        </div>
    </div>
  )
}

export default AuthLayout