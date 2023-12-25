"use client"
import Image from "next/image"
import Title from "./Title"
import { motion } from "framer-motion"

export default function Skills() {
    const skills = {
        Languages: {
            HTML: 80,
            CSS: 70,
            JavaScript: 80,
            TypeScript: 50
        },
        Libraries: {
            NextJS: 80,
            Redux: 60,
            JQuery: 70,
            TailwindCSS: 80,
        },
        Other: {
            Git: 30,
            VSCode: 80,
            Figma: 40,
            Microsoft: 30
        }
    }

    return (
        <section className="container my-[100px] sm:my-[50px]" id="skills">
            <Title>My Skills</Title>
            <div className="grid grid-cols-3 justify-between vs:grid-cols-1 gap-[20px] xs:gap-[15px] md:grid-cols-2">
                { Object.keys(skills).map((e, i) => <motion.div viewport={ { once: true } } whileInView={ { opacity: 1, y: 0 } } initial={ { opacity: 0, y: 100 } } transition={ { delay: (i * 1.7 + 2) / 10, easy: "linear" } } key={ i } className="lg:px-[20px] px-[30px] flex flex-col gap-[15px] pb-[40px] pt-[20px] bg-[#182228] rounded-[20px]">
                    <h6 className="text-[18px] text-white">{ e }</h6>
                    { Object.keys(skills[e]).map((el, ind) =>
                        <div key={ ind } className="min-w-[230px] xs:min-w-[190px] lg:min-w-[200px] relative flex justify-between">
                            <Image width={ 20 } height={ 20 } src={ "/logos/" + el.toLowerCase() + ".png" } alt={ el } />
                            <span className="text-[14px] text-white">{ el }</span>
                            <span className="text-[12px] text-[#989898]">{ skills[e][el] + "%" }</span>
                            <div className="absolute bg-[#ffa87a80] h-[3px] w-full rounded-[10px] bottom-[-4px] shadow-md shadow-[#ffa97a]">
                                <motion.div initial={ { width: 0 } } transition={ { duration: 2, delay: 0.2 } } whileInView={ { width: skills[e][el] + "%" } } className="bg-[#ffa97a] h-[3px]"></motion.div>
                            </div>
                        </div>) }
                </motion.div>) }
            </div>
        </section>
    )
}
