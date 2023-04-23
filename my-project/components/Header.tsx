import { motion } from 'framer-motion'
import React from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky flex p-5 top-0 justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div
        initial={{
            x:-500,
            scale:0.5,
            opacity:0,
        }}
        animate={{
            x:0,
            scale:1,
            opacity:1,
        }}
        transition={{
            duration:1.5
        }}
        className="flex flex-row items-center">
            {/* social media icons  */}
            <SocialIcon url="https://twitter.com"
            fgColor='gray'
            bgColor='transparent'/>
            <SocialIcon url="https://twitter.com"
            fgColor='gray'
            bgColor='transparent'/>
            <SocialIcon url="https://twitter.com"
            fgColor='gray'
            bgColor='transparent'/>
              <SocialIcon url="https://twitter.com"
            fgColor='gray'
            bgColor='transparent'/>  
        </motion.div>


        <motion.div
         initial={{
            x:500,
            scale:0.5,
            opacity:0,
        }}
        animate={{
            x:0,
            scale:1,
            opacity:1,
        }}
        transition={{
            duration:1
         }}
          className='flex flex-row items-center cursor-pointer text-gray-300'>
            <SocialIcon 
            className='cursor-pointer'
            network='email'
            fgColor='gray'
            bgColor='transparent'/>

            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get In Touch</p>

        </motion.div>
            
    </header>
  )
}