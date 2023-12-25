import Link from "next/link";

export default ({ children, scrollPos }) => <button onClick={ () => {
    document.getElementById(scrollPos).scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
} } className="py-[10px] rounded-[5px] md:py-[5px] md:px-[15px] md:text-[18px] px-[25px] font-[600] text-[20px] bg-[#ffa97a] text-[#293241] hover:bg-transparent hover:text-white transition-colors border-[2px] border-[#ffa97a]">{ children }</button>