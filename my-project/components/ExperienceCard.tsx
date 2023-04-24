import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
   <article className='flex flex-col rounded-lg items-center  flex-shrink-0 w-[500px] md:w-[600px] xl:w-[700px] snap-center bg-green-600/10 p-10 hover:opacity-100
    opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
    <motion.img 
    initial={{
        y:-100,
        opacity:0
    }}
    transition={{duration:1.2}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    className='w-32 h-32 rounded-full  xl:w-[200px] xl:h-[200px] object-cover object-center' 
    src="https://yt3.googleusercontent.com/ytc/AGIKgqMAYBdA6KLHG3ARPJjG_bKlHZChM9HpI73a5G_VUA=s900-c-k-c0x00ffffff-no-rj"
    alt=""
    />

    <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Data Science</h4>
        <p className='text-2xl font-bold mt-1'>Teachnook</p>
        <div className='flex space-x-2 my-2'>
            <img 
            className='h-10 w-10 rounded-full'
            src="https://yt3.googleusercontent.com/ytc/AGIKgqMAYBdA6KLHG3ARPJjG_bKlHZChM9HpI73a5G_VUA=s900-c-k-c0x00ffffff-no-rj"
            alt=""
            />
       
       <img 
            className='h-10 w-10 rounded-full'
            src="https://yt3.googleusercontent.com/ytc/AGIKgqMAYBdA6KLHG3ARPJjG_bKlHZChM9HpI73a5G_VUA=s900-c-k-c0x00ffffff-no-rj"
            alt=""
            />

            <img 
            className='h-10 w-10 rounded-full'
            src="https://yt3.googleusercontent.com/ytc/AGIKgqMAYBdA6KLHG3ARPJjG_bKlHZChM9HpI73a5G_VUA=s900-c-k-c0x00ffffff-no-rj"
            alt=""
            />
        </div>
        <p className='uppercase py-5 text-gray-300'>
            Started work... - Ended...
        </p>
        <ul className='List-disc space-y-4 ml-5 text-lg'>
            <li> Points Points Points Points Points Points Points Points Points Points Points Points Points Points Points Points</li>
            <li>Points</li>
            <li>Points</li>
            <li>Points</li>
            <li>Points</li>
        </ul>
    </div>
   </article>
  )
}