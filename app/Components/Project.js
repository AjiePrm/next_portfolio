import React from "react";
//import Image from 'next/image'
import "@/app/Style/Project.css";
import Card from "../Components/Card";
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
    <div className="pt-[125px] ">
      <h1 className="text-secondaryDark text-center m-auto text-[42px] w-[336px] font-bold leading-[50px] cursor-not-allowed">
        ミニプロジェクト <br />
        <span className="text-primaryRed">MINI PROJECT</span>
      </h1>

      <div
        className="mt-[26px] flex gap-2 w-[1070px] h-[370px]
      overflow-x-scroll m-auto"
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
    </div>
  );
}
