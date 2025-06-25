import React from 'react'

const SideLeftBer = () => {
  return (
    <div className='w-[300px] h-full bg-[#ffffff] pt-[15px] pr-[8px] pl-[24px] font-[Poppins] '>
      <div className='flex flex-col items-center mb-[42px]'>
        <div className='w-[120px] h-[120px] rounded-full bg-[#615DFA] mb-[15px]'></div>
        <h3 className='font-bold text-[16px] text-[#000000]'>Md Jihadul Islam</h3>
        < p className='font-medium text-[12px] text-[#AFB0C0]'>www.jihad.com</p>
      </div>
      {/* title end  */}
      <div className='flex gap-[49px] items-center text-center'>
        <div>
          <h4 className='font-bold text-[16px] text-[#000000]'>930</h4>
          <span className='font-medium text-[12px] text-[#AFB0C0]'>Friends</span>
        </div>
        <div className='relative after:content-[""] after:w-[1px] after:h-[25px] after:absolute after:top-[50%] after:left-[-24px] after:bg-[#AFB0C0] after:-translate-y-1/2 before:content-[""] before:w-[1px] before:h-[25px] before:absolute before:top-[50%] before:right-[-24px] before:bg-[#AFB0C0] before:-translate-y-1/2'>
          <h4 className='font-bold text-[16px] text-[#000000]'>58</h4>
          <span className='font-medium text-[12px] text-[#AFB0C0]'>Post</span>
        </div>
        <div>
          <h4 className='font-bold text-[16px] text-[#000000]'>1k</h4>
          <span className='font-medium text-[12px] text-[#AFB0C0]'>Followers</span>
        </div>
      </div>
      {/* ------end------- */}
    </div>
  )
}

export default SideLeftBer