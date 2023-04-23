import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function BackgroundCircle({}: Props) {
  return (
    <motion.div 
    initial={{
        opacity:0
    }}
    animate={{
        scale:[1,2,2,3,1],
        opacity:[0.1,0.2,0.4,0.8,0.1,1.0],
        borderRadius:["20%","20%","50%","80%","20%"],
    }}
    transition={{
        duration:2.5
    }}
    className='relative flex justify-center items-center mt-40'>
        <div className=' absolute border-4 border-green-600 rounded-3xl mt-52 h-[300px] w-[300px] animate-ping'/>
        <div className=' absolute border-2 border-green-700 rounded-3xl mt-52 h-[350px] w-[350px] opacity-20 '/>
        <div className='absolute border border-green-700 rounded-3xl mt-52 h-[500px] w-[500px] opacity-20 '/>
        <div className='absolute border border-green-300 rounded-3xl mt-52 h-[650px] w-[650px] opacity-20  '/>
        <div className='absolute border border-green-500 rounded-3xl mt-52 h-[800px] w-[800px] opacity-10 '/>
    </motion.div>
  )
}