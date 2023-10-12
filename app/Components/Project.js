import React from "react";
//import Image from 'next/image'
import "@/app/Style/Project.css";
import Card from "../Components/Card";
import Title from "../Components/title"
import Link from "next/link";
//import Link from "react-scroll";
//import vueImg from '../../src/Assets/Image/vue.svg'

export default function Project() {
  //  let scroll = Scroll.animateScroll;

  //  const scrollForward = (container) => {
  //    scroll.scrollMore(100, {
  //      horizontal: "true",
  //      containerId: container,
  //    });
  //  };
  //  const scrollBackward = (container) => {
  //    scroll.scrollMore(-100, {
  //      horizontal: "true",
  //      containerId: container,
  //    });
  //  };

  return (
    <div className="mt-[125px] z-[100] relative ">
      <Title jpTitle="ミニプロジェクト" title="MINI PROJECT"></Title>
      <div
        className="mt-[26px] grid grid-cols-2 gap-2 w-[1074px] h-[360px]
      overflow-y-scroll overflow-x-hidden m-auto"
      >
        <div className="w-[532px]" id="first">
          <Card title="Vue project base intern" stack="vue.js"></Card>
        </div>

        <div className="w-[532px]">
          <Card title="Vue project base intern" stack="vue.js"></Card>
        </div>

        <div className="w-[532px]" id="third">
          <Card title="Vue project base intern" stack="vue.js"></Card>
        </div>
      </div>
      <div className="absolute right-2 top-[60%]">
        <h1 className="text-primaryRed text-[26px] rotate-90">S c r o l l</h1>
      </div>
    </div>
  );
}
