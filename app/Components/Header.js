import React from 'react'
import Image from 'next/image'
//import LogoHead from '../../src/Assets/Image/logo_ajie.svg'
//import myImg from '../../public/next.svg'

export default function Header() {
  return (
    <div className='pl-[48px] grid grid-cols-2'>
        <div className='logo pt-[48px] cursor-pointer'>
           <Image src='./logoAjie.svg' alt="japan" width={52} height={52}/> 
        </div>
        <ul className='text-secondaryDark text-[18px] font-normal 
        flex space-x-[11px] justify-end pr-[50px] pt-[30px]'>
          <li className='hover:text-primaryRed hover:cursor-pointer
          hover:border-b-8 py-8  w-[94px] hover:bg-primaryRed 
          
          hover:bg-opacity-20 text-opacity-100'  style={{ textAlign: 'center' }}>Home</li>
          <li className='hover:text-primaryRed hover:cursor-pointer
          hover:border-b-8 py-8  w-[94px] hover:bg-primaryRed 
          
          hover:bg-opacity-20 text-opacity-100'  style={{ textAlign: 'center' }}>Work</li>
          <li className='hover:text-primaryRed hover:cursor-pointer
          hover:border-b-8 py-8  w-[94px] hover:bg-primaryRed 
          
          hover:bg-opacity-20 text-opacity-100'  style={{ textAlign: 'center' }}>Fav tools</li>
          <li className='hover:text-primaryRed hover:cursor-pointer
          hover:border-b-8 py-8  w-[94px] hover:bg-primaryRed 
          
          hover:bg-opacity-20 text-opacity-100'  style={{ textAlign: 'center' }}>Contact</li>
        </ul>
    </div>
  )
}
