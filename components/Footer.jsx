import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    const menu = ["About", "Skills", "Works", "Contacts"]
    const links = { mail: "meytikhanyan.hovsep@gmail.com", github: "MeytikhanyanHovsep", instagram: "_m_h_yan_" }

    const scrollToElement = e => {
        document.getElementById(e).scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
    }

    return (
        <footer id="contacts" className='bg-[rgb(255,169,122)] mt-[150px] items-center justify-center flex gap-[40px] flex-wrap pt-[25px] pb-[15px] text-[#293241] vs:px-[10px] vs:items-start vs:flex-col xs:gap-x-[50px] gap-x-[100px]'>
            <h2 className='min-w-full text-center text-[30px] xs:text-[20px] font-[700]'>Hovsep Meytikhanyan</h2>
            <ul className='flex gap-[10px] flex-col'>
                { menu.map((e, i) => <li key={ i }>
                    <button onClick={()=>scrollToElement(e.toLowerCase())} className='font-[500] text-[20px]'>{ e }</button>
                </li>) }
            </ul>
            <ul className='flex flex-col gap-[14px]'>
                { Object.keys(links).map((e, i) => <div className='flex vs:text-[14px] vs:gap-[5px] gap-[15px] items-center' key={ i }>
                    <Image src={ "/" + e + ".png" } className='p-[5px] vs:scale-[0.8] bg-[#293241] rounded-full' width={ 40 } height={ 40 } alt="" />
                    { links[e] }
                </div>) }
            </ul>
            <p className='min-w-full text-center text-[12px] vs:mt-0 mt-[20px]'>©Created by Hovsep Meytikhanyan in the year 2023</p>
        </footer>
    )
}
