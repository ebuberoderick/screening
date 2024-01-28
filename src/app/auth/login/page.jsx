'use client'
import AuthLayout from '@/components/layouts/AuthLayout'
import AppInput from '@/components/organisms/AppInput'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <AuthLayout>
        <div className="space-y-10">
            <div className="text-center text-2xl">PROJECT-X</div>
            <div className="text-center space-y-1">
                <div className="text-2xl">Welcome back</div>
                <div className="text-sm text-gray-400">Please, enter your login details to continue on Project-X</div>
            </div>
            <div className="space-y-2">
                <div className="space-y-6">
                    <AppInput label="Business Email" />
                    <AppInput label="Enter your password" type="password" />
                </div>
                <div className="text-[#025C56] text-sm text-right px-3 font-bold">
                    <Link href="">Forgot password?</Link>
                </div>
            </div>
            <div className="space-y-4">
                <button className='w-full bg-[#025C56] text-white py-3 rounded-full'>Sign in</button>
                <div className="text-xs text-center space-x-2">
                    <span>Don't have an account on Project-X?</span> 
                    <span className="text-[#025C56]">
                        <Link href="">Sign up</Link>
                    </span>
                </div>
            </div>
        </div>
    </AuthLayout>
  )
}

export default page