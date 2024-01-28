import React from 'react'
import AppInput from '../organisms/AppInput'
import AppSelect from '../organisms/AppSelect'

function ProductDetailChip() {
  return (
    <div>
        <div className="grid grid-cols-5 gap-8 py-6">
            <div className="flex gap-4 items-center">
                <i class="ri-menu-line"></i>
                <AppSelect options={["Generator","Television","Radio"]} />
            </div>
            <div className="">
                <div className='text-[16px] relative rounded-lg'>
                    <span className='absolute right-3 top-3 cursor-pointer'><i className="ri-close-line"></i></span>
                    <input className='w-full border focus:border-[#025C56] border-[#025C56] placeholder-shown:border-gray-300 p-3 peer outline-none rounded-lg placeholder:text-transparent' />
                </div>
            </div>
            <div className=""><AppInput /></div>
            <div className="">
                <div className='text-[16px] relative rounded-lg'>
                    <span className='absolute right-3 top-3 cursor-pointer'><i className="ri-close-line"></i></span>
                    <input className='w-full border focus:border-[#025C56] border-[#025C56] placeholder-shown:border-gray-300 p-3 peer outline-none rounded-lg placeholder:text-transparent' />
                </div>
            </div>
            <div className="flex gap-4 items-center"><AppInput /> <i class="ri-more-2-line"></i></div>
        </div>
    </div>
  )
}

export default ProductDetailChip