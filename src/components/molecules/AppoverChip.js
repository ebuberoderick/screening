import React from 'react'
import AppSelect from '../organisms/AppSelect'
import AppInput from '../organisms/AppInput'

function AppoverChip() {
  return (
    <div className='py-6 grid grid-cols-2 gap-8'>
        <AppSelect label="Title" options={["Bill approval over N5000","Bill approval below N5000"]} />
        <AppSelect label="Assign to" options={["Robert michael","Onyemzoro Ebube Roderick"]} />
        <AppSelect label="When" options={["Bill amount is greater than","Bill amount is less than"]} />
        <AppInput label="Amount" />
    </div>
  )
}

export default AppoverChip