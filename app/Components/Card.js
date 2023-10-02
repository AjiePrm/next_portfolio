import React from 'react'
import Image from 'next/image'

export default function Card(props) {
  return (
    <div className='w-[532px] h-[360px] bg-Paragraph rounded-[50px] relative'>
        <div className='absolute left-[14px] bottom-[14px] flex space-x-2 overflow-x-hidden overflow-y-hidden'>
          <div className='bg-PrimaryCream w-[81px] h-[81px] rounded-[50%] cursor-pointer flex place-content-center'>
            <Image className='z-20' src='/images/vue.svg' alt="Ajie" width={57} height={57}/>
           </div>
          <div className='hover-text w-[170px] my-auto'>
            <div className='cursor-pointer'>
              <h2 className='hover-text text-2xl overflow-x-hidden hover:text-clip'>
                {props.title}
              </h2>
              <p className='overflow-hidden' style={{ whiteSpace: 'nowrap', textOverflow: 'hidden' }}>
                {props.stack}
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}
