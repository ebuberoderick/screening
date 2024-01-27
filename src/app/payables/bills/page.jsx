import AppLayout from '@/components/layouts/AppLayout'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <AppLayout>
      <div className="space-y-8">
        <div className="flex items-center gap-8">
          <div className="flex-grow text-[28px]">Bills</div>
          <div className="text-white bg-[#025C56] rounded-full">
            <Link href="/payables/bills/create_bills">
              <div className="flex items-center px-6 py-2 justify-center gap-2">
                <i class="ri-add-fill"></i>
                <div className="">Create bill</div>
                <i class="ri-arrow-down-s-line"></i>
              </div>
            </Link>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-2">
          <div className="border px-6 py-4 space-y-2 rounded-lg">
            <div className="text-gray-500 flex items-center">
              <div className="flex flex-grow gap-2 items-center">
                <div className="w-8 h-8 border flex items-center justify-center rounded-full"><i class="ri-instance-line"></i></div>
                <div className="">Total</div>
              </div>
            </div>
            <div className="text-3xl font-[500px]">&#8358; 1,824,456</div>
          </div>
          
          <div className="border px-6 py-4 space-y-2 rounded-lg">
            <div className="text-gray-500 flex items-center">
              <div className="flex flex-grow gap-2 items-center">
                <div className="w-8 h-8 border flex items-center justify-center rounded-full"><i class="ri-cash-line"></i></div>
                <div className="">Paid bills</div>
              </div>
              <div className="text-2xl"><i class="ri-arrow-right-line"></i></div>
            </div>
            <div className="text-3xl font-[500px]">&#8358; 1,824,456</div>
          </div>
          
          <div className="border px-6 py-4 space-y-2 rounded-lg">
            <div className="text-gray-500 flex items-center">
              <div className="flex flex-grow gap-2 items-center">
                <div className="w-8 h-8 border flex items-center justify-center rounded-full"><i class="ri-cash-line"></i></div>
                <div className="">Unpaid bills</div>
              </div>
              <div className="text-2xl"><i class="ri-arrow-right-line"></i></div>
            </div>
            <div className="text-3xl font-[500px]">&#8358; 1,824,456</div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="flex-grow text-lg">Bills summary</div>
            <div className="border flex items-center gap-2 rounded-md text-xs text-gray-500 p-2 px-4">
              <div className="text-lg"><i class="ri-filter-3-fill"></i></div>
              <div className="">Filter</div>
            </div>
            <div className="border flex items-center gap-2 rounded-md text-xs text-gray-500 p-2 px-4">
              <div className="">Export</div>
              <div className="text-lg"><i class="ri-arrow-down-s-line"></i></div>
            </div>
          </div>
          <div className=""></div>
        </div>
      </div>
    </AppLayout>
  )
}

export default page