import React from 'react'

type Props = {}

export default function About({}: Props) {
  return (
    <div className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h1 className='uppercase absolute top-24 tracking-[15px] text-gray-500 text-2xl'>About</h1>
    </div>
  
    )
}