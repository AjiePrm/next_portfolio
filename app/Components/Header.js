import React from 'react'
import Image from 'next/image'
import '../Style/Style.css'
//import LogoHead from '../../src/Assets/Image/logo_ajie.svg'
//import myImg from '../../public/next.svg'

export default function Header() {
  return (
    <div className='pl-[48px] grid grid-cols-2 h-[30px] z-0'>
        <div className='logo pt-[48px]'>
           <Image className='cursor-pointer' src='./logoAjie.svg' alt="japan" width={52} height={52}/> 
        </div>
        <nav className='z-0'>
          <ul className='text-secondaryDark text-[18px] font-normal 
          flex space-x-[11px] justify-end pr-[50px] pt-[30px]'>
            <li className='hover:text-primaryRed hover:cursor-pointer
             py-[28px]  w-[94px] hover:bg-primaryRed 
            hover:bg-opacity-20 text-opacity-100'  style={{ textAlign: 'center' }}> <a href='#'>Home</a> </li>
            <li className='hover:text-primaryRed hover:cursor-pointer
             py-[28px]  w-[94px] hover:bg-primaryRed 
            
            hover:bg-opacity-20 text-opacity-100'  style={{ textAlign: 'center' }}><a href='#'>Work</a></li>
            <li className='hover:text-primaryRed hover:cursor-pointer
             py-[28px]  w-[94px] hover:bg-primaryRed 
            
            hover:bg-opacity-20 text-opacity-100'  style={{ textAlign: 'center' }}><a href='#'>tools</a></li>
            <li className='hover:text-primaryRed hover:cursor-pointer
             py-[28px]  w-[94px] hover:bg-primaryRed 
            
            hover:bg-opacity-20 text-opacity-100'  style={{ textAlign: 'center' }}><a href='#'>Contact</a></li>
          </ul>
        </nav>
        
    </div>
  )
}
