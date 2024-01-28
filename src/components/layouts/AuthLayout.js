'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

function AuthLayout({children}) {
  const router = useRouter()
  const isAuthenticated = localStorage.screeningAuthState  

  if (isAuthenticated) {
    router.push("/overview")
  }

  const submitForm = (e) => {
    e.preventDefault()
    if (localStorage.screeningAuthState = true) {
      router.push("/overview")
    }
  }
  return (
    <div className='h-screen w-screen bg-gray-100 flex items-center'>
        <div className='w-full'>
            <form onSubmit={(e) => submitForm(e)} className='max-w-lg mx-auto p-10 bg-white rounded-lg'>{children}</form>
        </div>
    </div>
  )
}

export default AuthLayout