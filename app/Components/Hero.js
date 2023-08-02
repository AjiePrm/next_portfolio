import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className='pl-[48px] pt-[165px] grid grid-cols-2'>
        <div className='left'>
            <div className='cursor-not-allowed'>
                <h1 className='text-secondaryDark font-bold text-[42px] leading-[50px] not-italic'>いらっしゃいませ <br/>
                    <span className='text-primaryRed'>INDEPENDENT FRONT-END</span> <br/>
                    WEB DEVELOPER
                </h1>
            </div> 
            <div className='pt-[34px] cursor-not-allowed'>
                <p className='text-Paragraph font-normal text-[18px]'>
                Hey ! I’m Ajie, twenty-three years old front-end developer. I make <br/> 
                beautiful website that help you achieve your goals. Also, i’m <br/>
                interested in web design and art.
                </p>
            </div>
            <div className='relative h-[47px] hover:cursor-pointer mt-[97px] ml-[4px]'>
                <div className='absolute pl-[4px] active:bottom-[-4px] active:pl-[0px] active:ml-[0px] z-20'>
                    <button className='py-[11.5px] px-[26px] bg-primaryRed rounded-[4px] z-21'>
                        My Curriculum Vitae
                    </button>
                </div>
                <div className='h-[47px] w-[204px] shadow-md absolute border border-primaryRed bottom-[-4px] z-0 rounded-[4px]'> 
                    
                </div>
                
            </div>
        </div>

        <div className='relative w-fit z-20'>
           <div className='w-[428px] h-[428px] bg-primaryRed rounded-[50%] ml-[22px] mt-4 shadow-md '>
           </div>
           <div className='absolute top-[-80px] left-[-60px] w-[634px] z-20'>
            <Image className='z-20' src='/hero.png' alt="Ajie" width={600} height={588}/>
           </div>
        </div> 

    </div>
  )
}
