import React from 'react'
import Image from 'next/image'
import "@/app/Style/Project.css"
import Card from '../Components/Card'
//import vueImg from '../../src/Assets/Image/vue.svg'

export default function Project(props) {
  return (
    <div className='pt-[125px] '>
    <h1 className='text-secondaryDark text-center m-auto text-[42px] w-[336px] font-bold leading-[50px] cursor-not-allowed'>
      ミニプロジェクト <br/>
      <span className='text-primaryRed'>MINI PROJECT</span>
    </h1>

    <div className='mt-[26px] flex gap-2 justify-center overflow-hidden w-[1000px] m-auto cursor-pointer'>
      <p className='hidden [note]'> ternary aktif withd 98 ke 543 px nanti </p>

      <Card title="Vue project base intern" stack="vue.js"></Card>
      <Card title="Vue project base intern" stack="vue.js"></Card>
    </div>
  </div>
  
  )
}
