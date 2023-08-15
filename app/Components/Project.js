import React from 'react'

export default function Project() {
  return (
    <div className='pt-[125px] '>
      <h1 className='text-secondaryDark text-center m-auto text-[42px] w-[336px] font-bold leading-[50px] cursor-not-allowed'
      >ミニプロジェクト <br/>
        <span className='text-primaryRed'>MINI PROJECT</span></h1>

      <div className='mt-[26px] flex space-x-3 justify-center overflow-hidden w-[1000px] m-auto cursor-pointer'>
          <div className='w-[532px] h-[360px] bg-Paragraph rounded-[50px] relative'>
            <div className='absolute left-[14px] bottom-[14px] flex space-x-2'>
              <div className='bg-PrimaryCream w-[81px] h-[81px] rounded-[50%] cursor-pointer'>

              </div>
              <div className='my-auto cursor-pointer align-middle'>
                <h2 className='text-2xl'>Project Name</h2>
                <p>tech stack</p>
              </div>
            </div>
          </div>

          <div className='w-[98px] h-[360px] bg-Paragraph rounded-[50px]'>

          </div>
      </div>
    </div>
  )
}
