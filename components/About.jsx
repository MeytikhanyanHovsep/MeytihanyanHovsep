"use client"
import { motion } from 'framer-motion';
import Title from './Title'
import Image from 'next/image'
import ButtonFill from './ButtonFill';

export default function About() {
    const about = {
        "Completed": "100 + projects",
        "In the field": "1 + years",
        "Studied": "10 + languages",
    }
    const boxesAnim = [{opacity:0,x:-100},{opacity:0,y:50},{opacity:0,x:100}]

    return (
        <section className='container' id="about">
            <Title>About Me</Title>
            <div className='flex justify-between gap-[50px] sm:gap-[20px] sm:flex-col items-center'>
                <motion.div viewport={{ once: true }} transition={ { type: "spring", duration: 1, delay: 0.3 } } whileInView={ { x: 0, opacity: 1 } } initial={ { x: -300, opacity: 0 } }>
                    <Image src="/man1.png" className='max-w-[280px] xs:max-w-[230px]  sm:max-w-[180px] lg:max-w-[250px] md:max-w-[220px] object-contain rounded-[30px] bg-gradient-to-b from-[#ffa97a] to-[#f8f2f4] xs:mx-auto' alt='my image' width={ 300 } height={ 300 } />
                </motion.div>
                <motion.div viewport={{ once: true }} transition={ { ease: "linear", duration: 0.3, delay: 0.3 } } whileInView={ { y: 0, opacity: 1 } } initial={ { y: 100, opacity: 0 } } className='lg:hidden'>
                    <Image src="/arrow1.png" alt='' className='max-w-[250px] object-contain drop-shadow-[3px_3px_10px_#ffa87a98] ' width={ 300 } height={ 300 } />
                </motion.div>
                <div className='max-w-[450px] flex flex-col gap-[40px] sm:items-center md:gap-[20px] md:max-w-full'>
                    <motion.p viewport={{ once: true }} transition={ { ease: "linear", duration: 0.3, delay: 0.3 } } whileInView={ { y: 0, opacity: 1 } } initial={ { y: 50, opacity: 0 } } className='text-[#959595] text-[14px] font-[500] leading-[25px]'>Web developer, with extensive knowledge and years of experience, working in web technologies and ui . Ux design, delivering quality work</motion.p>
                    <div className='grid grid-cols-3 sm:w-full md:gap-[15px] xs:gap-[5px] gap-[25px]'>
                        { Object.keys(about).map((e, i) => <motion.div viewport={{ once: true }} transition={ { ease: "linear", duration: 0.3, delay: 0.5 } } whileInView={ { y: 0, x: 0, opacity: 1 } } initial={ boxesAnim[i]  } className='bg-[#182228] flex flex-col justify-center items-center py-[15px] rounded-[15px]' key={ i }>
                            <Image width={ 25 } alt={ e } src={ "/" + e.toLowerCase() + ".png" } height={ 25 } className='xs:max-w-[20px] object-contain' />
                            <p className='text-[14px] xs:text-[12px] xs:my-[3px] my-[5px] text-white font-[400]'>{ e }</p>
                            <p className='text-[12px] xs:text-[10px] text-[#959595]'>{ about[e] }</p>
                        </motion.div>) }
                    </div>
                    <motion.div viewport={{ once: true }} transition={ { ease: "linear", duration: 0.3, delay: 0.3 } } whileInView={ { x: 0, opacity: 1 } } initial={ { x: 300, opacity: 0 } } className='max-w-max bg-red'>
                        <ButtonFill scrollPos="contacts">Contact me</ButtonFill>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
