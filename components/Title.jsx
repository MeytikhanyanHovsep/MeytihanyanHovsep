"use client"
import { motion} from "framer-motion"

export default ({ children }) => <motion.h4 viewport={{once:true}} initial={ { opacity: 0, y: 100 } } transition={ { delay: 0.2, duration: 0.3, type: "easy" } } whileInView={ { opacity: 1, y: 0 } } className="mx-auto mb-[50px] drop-shadow-[0_0_50px_#ffa97a] max-w-max text-[#ffa97a] sm:text-[23px] sm:mb-[30px] xs:mb-[20px] xs:text-[20px] text-[28px] font-[800]">{ children }</motion.h4>