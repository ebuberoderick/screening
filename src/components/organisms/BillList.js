import React from 'react'

function BillList({data}) {
  return (
    <div className="flex w-full items-center font-bold py-3 text-sm">
        <div className="flex-grow items-center grid pt-1 grid-cols-5">
            <div className="flex items-center gap-2"><input type="checkbox" className='checked:bg-[#025C56]' /> B-623-4534</div>
            <div className="">{data}</div>
            <div className="">05/05/23</div>
            <div className="">10/10/23</div>
            <div className="">₦15245.66</div>
        </div>
        <div className="text-xl w-12"><i class="ri-more-2-fill"></i></div>
    </div>
  )
}

export default BillList