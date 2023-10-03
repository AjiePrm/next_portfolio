import React from 'react'
//import Image from 'next/image'
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

    <div className='mt-[26px] flex gap-2 w-[1070px] overflow-x-auto m-auto cursor-pointer'>

    <div className="w-[532px]">
    <Card title="Vue project base intern" stack="vue.js"></Card>
    </div>

    <div className="w-[532px]">
    <Card title="Vue project base intern" stack="vue.js"></Card>
    </div>
    
    <div className="w-[532px]">
    <Card title="Vue project base intern" stack="vue.js"></Card>
    </div>
    
    </div>
  </div>
  
  )
}
