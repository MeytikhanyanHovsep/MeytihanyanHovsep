import Link from "next/link";
import Title from "./Title";
import Image from "next/image";

const works = [
       {projectName:"SFS-School",link:"https://sfsschool.netlify.app",categorie:"Websites"} 
]

export default function Works() {
    const categories=['Websites']
    return (
        <section className="container" id="works">
            <Title>My Works</Title>
            <div className="flex gap-[35px] justify-center">
                <button className={`py-[10px] text-[18px] font-[400] px-[20px] border-[2px] border-[#ffa97a] rounded-[5px] ${"text-white"}`}>All</button>
                {categories.map((e,i)=><button key={i} className={`py-[10px] text-[18px] font-[400] px-[20px] border-[2px] border-[#ffa97a] rounded-[5px] ${"text-white"}`}>{e}</button>)}
            </div>
            <div className="grid mt-[40px] grid-cols-3">
                {works.map((e,i)=><Link key={i} target="_blank" className="flex text-white text-[20px] rounded-[20px] bg-[#182228] flex-col relative p-[30px]" href={e.link}>
                <Image src={"/works/"+e.projectName.toLowerCase()+".png"} alt={e.projectName} className="rounded-[10px] brightness-[30%] blur-[1px]" width={300} height={300} />
                <span className="absolute left-[50px] top-[50px]">{e.projectName}</span>
                <button className="py-[5px] hover:scale-[1.2] transition-transform left-[50px] text-[18px] font-[400] px-[20px] border-[2px] border-[#ffa97a] rounded-[5px] text-white absolute bottom-[50px]">View</button>
                </Link>)}
            </div>
        </section>
    )
}
