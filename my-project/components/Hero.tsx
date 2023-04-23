import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle'
import image from "./../assets/profile.jpeg"
import Link from 'next/link'
type Props = {}

export default function Hero({}: Props) {
    const[text,count]=useTypewriter({
        words:["Hi,The Name's Kshitij Kumar","Guy-who-loves-gaming","Software Developer"],
        loop:true,
        delaySpeed:1000,
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircle />
        <img
        className='relative rounded-full h-32 w-32 mx-auto object-cover' 
        src="https://yt3.googleusercontent.com/ytc/AGIKgqMAYBdA6KLHG3ARPJjG_bKlHZChM9HpI73a5G_VUA=s900-c-k-c0x00ffffff-no-rj" alt="profile"
         />
         <div className='z-20'>
            <h2 className='uppercase text-lg ml-4   text-gray-500 pb-4 tracking-[15px]'>Kshitij Kumar</h2>
         <h1 className='text-5xl lg-text-6xl font-semibold px-10  text-gray-400'>
        <span className=''>{text}</span>
        <Cursor cursorColor='green' />
        </h1>

        <div className='pt-5'>
            <Link href="#about">
            <button className='heroButton'>About</button>
            </Link>
         
            <Link href="#experience">
            <button className='heroButton'>Experience</button>
            </Link>
            <Link href="#skills">
            <button className='heroButton'>Skills</button>
            </Link>
            <Link href="#projects">
            <button className='heroButton'>Projects</button>
            </Link>
        
       
        
      
        </div>

         </div>
      
        
    </div>
  )
}