import React from 'react'

export default function title(props) {
  return (
    <h1 className="text-secondaryDark text-center m-auto text-[42px] w-[336px] font-bold leading-[50px] cursor-not-allowed">
        {props.jpTitle}<br />
        <span className="text-primaryRed">{props.title}</span>
    </h1>
  )
}
