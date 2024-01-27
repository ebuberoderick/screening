'use client'
import AppLayout from '@/components/layouts/AppLayout'
import AppInput from '@/components/organisms/AppInput'
import AppSelect from '@/components/organisms/AppSelect'
import Link from 'next/link'
import React from 'react'

function Page() {

  return (
    <AppLayout>
        <div className="space-y-8">
            <div className="flex items-center gap-8">
                <div className="flex-grow text-[28px]"><Link href="/payables/bills" className='cursor-pointer'><i className="ri-arrow-left-line"></i></Link></div>
                <div className="text-white bg-[#025C56] rounded-full">
                    <div className="flex items-center px-6 py-2 justify-center gap-2">Save</div>
                </div>
            </div>
        
            <div className="space-y-4">
                <div className="flex items-center gap-4">
                    <div className="flex-grow text-lg font-bold">Enter a bill</div>
                    <div className="flex items-center gap-2 text-sm cursor-pointer text-gray-500 p-2 px-4">
                        <div className="text-lg"><i className="ri-add-fill"></i></div>
                        <div className="">Add existing Vendor</div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-8">
                    <AppSelect label="Vendor" options={["Robert michael","Onyemzoro Ebube Roderick"]} />
                    <AppInput label="Invoice no" />
                    <AppInput label="Amount" />
                    <AppInput label="Payment terms" />
                    <AppInput label="Billing Address" />
                    <AppInput label="Bill description (Optional)" />
                </div>
            </div>
            
            <div className="space-y-4">
                <div className="flex items-center gap-4">
                    <div className="flex-grow text-lg font-bold">Product details</div>
                </div>
                <div className=""></div>
            </div>
        
            <div className="space-y-4">
                <div className="flex items-center gap-4">
                    <div className="flex-grow text-lg font-bold">Approver</div>
                </div>
                <div className=""></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="border flex gap-6 flex-col items-center border-dashed border-[#025C56] rounded-lg p-12">
                    <div className="text-gray-400 text-3xl"><i className="ri-image-line"></i></div>
                    <div className="">Drag and drop an invoice here or,</div>
                    <div className="">
                        <div className="bg-[#025C56] px-8 text-sm py-3 rounded-full cursor-pointer text-white">Browse computer</div>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
  )
}

export default Page