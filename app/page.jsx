"use client"
import About from "@/components/About"
import Footer from "@/components/Footer"
import Main from "@/components/Main"
import Skills from "@/components/Skills"
import Works from "@/components/Works"
import { motion } from "framer-motion"

function Home() {
    return <>
        <Main />
        <div className="container">
            <motion.div initial={ { y: 100, opacity: 0 } } viewport={ { once: 1 } } whileInView={ { y: 0, opacity: 1 } } transition={ { easy: "linear", duration: 1, delay: 0.3 } } className="mx-auto my-[100px] sm:my-[50px] max-w-max sm:py-[10px] sm:px-[15px] sm:text-[16px] py-[30px] relative px-[20px] border-[2px] text-white text-[20px] rounded-[5px] border-[#ffa97a]">
                <span className="absolute top-[-34px] left-[10px] text-[#ffa97a] sm:top-[-25px] sm:text-[50px] text-[70px]">"</span>
                A developer who doesn't hack an Instagram accounts
                <span className="absolute bottom-[-75px] right-[10px] text-[#ffa97a] sm:bottom-[-53px] sm:text-[50px] text-[70px]">"</span>
            </motion.div>
        </div>
        <About />
        <Skills />
        <Works />
        <Footer />
    </>
}

export default Home