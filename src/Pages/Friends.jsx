import React from 'react'
import ProfilePart from '../Component/ProfilePart'
import { FaSearch } from 'react-icons/fa'
import Findfrirnd from '../Component/Findfrirnd'

const Friends = () => {
  return (
    <div>
      <div>
        <div className='mb-[62px]'>
          <ProfilePart/>
        </div>
        <div className='mb-[39px]'>
          <p className='font-[Poppins] font-normal text-[14px] text-[#AFB0C0]'>BROWSE ABM SHAWON</p>
          <h3 className='font-[Poppins] font-medium text-[24px] text-[#24234B]'>Friends 82</h3>
        </div>
        <div className='bg-white pt-[22px] pb-[15px] pl-[25px] w-full rounded-[10px] mb-[31px]'>
          <div className='w-[717px] relative  '>
            <input
            className='border border-[#D9D9D9] w-full pt-[13px] pb-[12px] pl-[15px] rounded-[13px] font-[Poppins] font-normal text-[15px] text-[#D9D9D9]'
             type="text" placeholder='Search Friends' />
             <div className='absolute top-[0px] right-0'>
              <button className='pt-[12px] pb-[11px] pl-[29px] pr-[30px] bg-[#23D2E2] rounded-[10px]  text-[25px] text-white'>
                <FaSearch />
              </button>
             </div>
          </div>
        </div>
        <div className='w-full'>
          <div className='flex flex-wrap gap-x-[14px] gap-y-[17px] w-full'>
          <Findfrirnd/>
          <Findfrirnd/>
          <Findfrirnd/>
          <Findfrirnd/>
          <Findfrirnd/>
          <Findfrirnd/>
          <Findfrirnd/>
          <Findfrirnd/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Friends