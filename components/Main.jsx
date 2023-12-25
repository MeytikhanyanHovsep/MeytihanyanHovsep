"use client"
import Image from 'next/image'
import React from 'react'
import ButtonFill from './ButtonFill'
import { motion } from "framer-motion"

export default function Main() {
    return (
        <main className='mt-[100px] xs:mt-[70px] xs:flex-col xs:items-stretch sm:flex-wrap sm:gap-[30px] pt-[40px] flex justify-between container items-center' id="main">
            <motion.div animate={ { x: 0, opacity: 1 } } transition={{type:"spring",duration:1}} initial={ { x: -300, opacity: 0 } } className='flex items-start gap-[10px] flex-col sm:gap-[5px] xs:items-center'>
                <p className='text-[16px] text-white'>Hello, I’m</p>
                <h1 className='text-[40px] xs:text-[23px] sm:text-[28px] md:text-[33px] text-[#ffa97a]'>Hovsep Meytikhanyan</h1>
                <p className='text-[25px] xs:text-[18px] sm:text-[20px] md:text-[23px] text-white relative md:mb-[20px] mb-[40px]'>{ "> " }Front-End Developer</p>
                <ButtonFill scrollPos="about">About me</ButtonFill>
            </motion.div>
            <motion.div animate={ { y: 0, opacity: 1 } } transition={{type:"spring",duration:1}} initial={ { y: -100, opacity: 0 } } className='lg:hidden'>
                <Image src="/arrow.png" alt='' className='max-w-[250px] object-contain drop-shadow-[5px_5px_10px_#ffa87a98]' width={ 300 } height={ 300 } />
            </motion.div>
            <motion.div animate={ { x: 0, opacity: 1 } } transition={{type:"spring",duration:1}} initial={ { x: 300, opacity: 0 } }>
                <Image src="/man.png" className='max-w-[280px] xs:max-w-[230px]  sm:max-w-[180px] lg:max-w-[250px] md:max-w-[220px] object-contain rounded-[30px] bg-gradient-to-b from-[#ffa97a] to-[#f8f2f4] xs:mx-auto' alt='my image' width={ 300 } height={ 300 } />
            </motion.div>
        </main>
    )
}
