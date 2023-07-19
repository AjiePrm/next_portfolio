import React from 'react'
//import Image from next/image
//import LogoHead from '../../src/Assets/Image/logo_ajie.svg'
import myImg from './logo-ajie.png'

export default function Header() {
  return (
    <div className='grid grid-cols-2'>
        <div className='logo'>
            <img src={myImg} alt="japan"/>
        </div>

    </div>
  )
}
