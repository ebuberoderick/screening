import Image from 'next/image'
import React from 'react'
import avatar from "@assets/images/avatar/Leslie_Image.png"
import AppLink from '../organisms/AppLink'

function SideNav() {
  return (
    <div className='fixed select-none overflow-y-auto flex flex-col h-screen border-r w-64 gap-y-6 py-8 px-1'>
        <div className='text-2xl px-1'>PROJECT-X</div>
        <div className='flex-grow flex flex-col gap-2'>
          <AppLink text={"overview"} icon={<i className="ri-home-4-line"></i>} />
          <AppLink text={"inbox"} icon={<i className="ri-inbox-2-line"></i>} />
          <AppLink text={"receivables"} icon={<i className="ri-article-line"></i>}  subMenu={[{name:"invoices",extra:false},{name:"payments in",extra:false},{name:"products",extra:false},{name:"customers",extra:false}]}/>
          <AppLink text={"payables"} icon={<i className="ri-money-dollar-circle-fill"></i>} subMenu={[{name:"bills",extra:false},{name:"approvals",extra:false},{name:"payment",extra:false},{name:"procurement",extra:true,option:["projects","RFP","requisition","purchase order","suppliers"]}]} />
          <AppLink text={"reports"} icon={<i className="ri-bar-chart-box-line"></i>} />
          <AppLink text={"configuration"} icon={<i className="ri-pencil-line"></i>} />
          <AppLink text={"expenses"} icon={<i className="ri-pie-chart-line"></i>} />
        </div>
        <div className='space-y-2'>
          <AppLink text={"settings"} icon={<i className="ri-settings-3-line"></i>} />
          <AppLink text={"logout"} icon={<i className="ri-logout-box-r-line"></i>} />
        </div>
        <div className='border-t py-3'>
            <div className='flex items-center gap-2'>
                <div className='w-10 h-10 bg-gray-300 rounded-full overflow-hidden'>
                  <Image src={avatar} alt='Michael Michael'/>
                </div>
                <div className='flex-grow'>
                    <div className='font-bold text-sm'>Michael Michael</div>
                    <div className='text-xs font-[400px] text-[#748684]'>Administrator</div>
                </div>
                <div  className='text-2xl'><i className="ri-arrow-down-s-line"></i></div>
            </div>
        </div>
    </div>
  )
}

export default SideNav