"use client"
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Header() {
    const menu = ["About", "Skills", "Works", "Contacts"]
    const [menuToggle, setMenuToggle] = useState(false)

    const scrollToElement = e => {
        document.getElementById(e).scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
        setTimeout(() => {
            setMenuToggle(false)
        }, 500);
    }

    return <header className='bg-[#212d3880] shadow-md shadow-[#ffa87a1d] fixed backdrop-blur-[20px] z-[100] top-0 left-0 w-full'>
        <nav className='container sm:flex-wrap transition-all text-white py-[25px] sm:py-[15px] flex items-center justify-between'>
            <button onClick={ () => scrollToElement("main") } className='text-[25px] sm:text-[22px] text-[#ffa97a]'>H0vsep</button>
            <button className="h-5 w-5 xs:mr-[5px] scale-[1.4] hidden sm:block" onClick={ () => setMenuToggle(!menuToggle) }>
                <div className={ `absolute h-0.5 w-5 bg-[#ffa97a] rounded-md transition-all duration-300 ease-in-out ${ menuToggle ? "rotate-45" : "-translate-y-1.5" }` }
                />
                <div className={ `absolute h-0.5 w-4 bg-[#ffa97a] right-0 rounded-md transition-all duration-300 ease-in-out ${ menuToggle ? "opacity-0" : "opacity-100" }` }
                />
                <div className={ `absolute h-0.5 bg-[#ffa97a] right-0 rounded-md transition-all duration-300 ease-in-out ${ menuToggle ? "-rotate-45 w-5" : "translate-y-1.5 w-3" }` }
                />
            </button>
            <motion.ul animate={ { ...(menuToggle ? { height: "auto", marginTop: 20 } : { height: 0, marginTop: 0 }) } } className={ `nav-menu text-[18px] sm:justify-center sm:text-[16px] sm:min-w-full flex gap-[35px] overflow-hidden sm:flex-col sm:gap-[10px] min-h-[25px] sm:min-h-max` }>
                { menu.map((e, i) => <li key={ i }>
                    <button className='' onClick={ () => scrollToElement(e.toLowerCase()) }>{ e }</button>
                </li>) }
            </motion.ul>
        </nav>
    </header>
}
