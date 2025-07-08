import React from 'react'

const MerketHead = () => {
  return (
    <div className='w-[100%] h-[160px] bg-[#615DFA] rounded-[14px] mb-[22px]'>
        <div className='flex items-center gap-[36px]'>
            <img src="images/store.png" alt="store"/>
            <div>
                <h2 className='font-[Poppins] font-bold text-white text-[36px] mb-[-8px]'>MERNIAN Marketplace</h2>
                <p className='font-[Poppins] font-normal text-white text-[15px]'>The best place for the community to buy and sell!</p>
            </div>
        </div>
    </div>
  )
}

export default MerketHead