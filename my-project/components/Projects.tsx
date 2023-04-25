/* eslint-disable react/jsx-key */
import { motion } from 'framer-motion'
import React from 'react'

type Props = {
   
}

export default function Projects({}: Props) {
    const projects=[1,2,3,4,5]
  return (
    <motion.div
    initial={{
        opacity:0
    }}
    transition={{duration:1.5}}
    whileInView={{opacity:1}}
    className=' flex flex-col relative space-y-10 text-left md:flex-row   max-w-full  h-screen justify-center mx-auto items-center z-0'>
        <div className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
        </div>
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
            
            {projects.map((project,i)=>(
                <div className='w-screen   flex-shrink-0 snap-center flex flex-col space-y-5  items-center justify-center p-20 md:p-44 h-screen '>
                <motion.img  
                initial={{
                    y:-300,
                    opacity:0
                }}
                transition={{
                    duration:1.2
                }}
                whileInView={{
                    opacity:1,y:0
                }}
                viewport={{once:true}}
                src="https://yt3.googleusercontent.com/ytc/AGIKgqMAYBdA6KLHG3ARPJjG_bKlHZChM9HpI73a5G_VUA=s900-c-k-c0x00ffffff-no-rj"
                alt="" 
                className='w-[200px] h-[100px] xl:w-[500px] xl:h-[300px] md:w-[300px] md:h-[200px] object-cover '
                />
                
                <div className='space-y-10  px-0 md:px-10 max-w-6xl'
                >
                    <h4 className='text-3xl font-semibold '>
                        <span className=' text-green-100/70 text-4xl font-bold'>Project {i+1} of {projects.length} :</span> ChatGPT Clone
                    </h4>
                    <p className='text-lg md:text-left text-center'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur qui dolorum accusamus quia in. Commodi nesciunt veritatis, quos magnam modi reprehenderit totam dolorum amet officiis laudantium impedit praesentium voluptatum odio.</p>
                </div>
                </div>
            ))}
            
        </div>
        <div className='w-full absolute top-[30%] bg-green-500/10 left-0 h-[500px] -skew-y-12 ' />
    </motion.div>
  )
}