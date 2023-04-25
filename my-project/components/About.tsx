import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
    initial={{
      opacity:0,
    }}
    whileInView={{
      opacity:1
    }}
    transition={{
      duration:1.5
    }}
     className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl space-x-10 px-10 justify-evenly mx-auto items-center'>
        <h1 className='uppercase absolute top-24 tracking-[20px] text-gray-500 text-2xl'>About</h1>
        <motion.img 
        initial={{
          x:200,
          opacity:0
        }}
        transition={{
          duration:1.2
        }}
        whileInView={{
          opacity:1,
          x:0
        }}
        viewport={{
          once:true
        }}
        src="https://yt3.googleusercontent.com/ytc/AGIKgqMAYBdA6KLHG3ARPJjG_bKlHZChM9HpI73a5G_VUA=s900-c-k-c0x00ffffff-no-rj"
        className='md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
        />
        <div className='border-2 rounded-2xl border-green-500/20 py-10 bg-green-700/10 space-y-10 px-0 md:px-10'>
          <h4 className='text-4xl font-semibold text-green-100/70'>
            Here is a Little background

          </h4>
          <p className='text-base'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum quam eos numquam unde natus. Earum possimus esse, ipsum soluta corporis accusantium alias inventore doloribus ducimus quo sunt vero omnis quia!
          </p>
        </div>

        
    </motion.div>
  
    )
}