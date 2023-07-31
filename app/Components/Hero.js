import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className='pl-[48px] pt-[165px] grid grid-cols-2'>
        <div className='left'>
            <div>
                <h1 className='text-secondaryDark font-bold text-[42px] leading-[50px] not-italic'>いらっしゃいませ <br/>
                    <span className='text-primaryRed'>INDEPENDENT FRONT-END</span> <br/>
                    WEB DEVELOPER
                </h1>
            </div> 
            <div className='pt-[34px]'>
                <p className='text-Paragraph font-normal text-[18px]'>
                Hey ! I’m Ajie, twenty-three years old front-end developer. I make <br/> 
                beautiful website that help you achieve your goals. Also, i’m <br/>
                interested in web design and art.
                </p>
            </div>
            <div className='mt-[97px] ml-[4px] relative h-[47px]'>
                <div className='hover:cursor-pointer
                active:ml-[-4px] active:bottom-[-4px]'>
                    <button className='py-[11.5px] px-[26px] bg-primaryRed rounded-[4px]'>
                        My Curculum Vitae
                    </button>
                </div>
                <div className='h-[47px] w-[195px] absolute border border-primaryRed left-[-4px] bottom-[-4px]'> 
                    
                </div>
                
            </div>
        </div>

    </div>
  )
}
