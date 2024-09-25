import React from 'react'

export default function Button(props) {
    const {buttonText} = props
  return (
    <button className="px-5 py-[12px] font-bold uppercase text-[14px] bg-red text-light">{buttonText}</button>
  )
}
