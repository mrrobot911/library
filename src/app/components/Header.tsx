import { FunctionComponent } from "react";
import Image from 'next/image';

const arr = [
    "About",
    "Favorites",
    "Coffee shop",
    "Contacts",
    "Library Card"
]

interface header  {}
 
const Header : FunctionComponent<header> = () => {
    return ( 
    <header className="flex items-center justify-between max-w-[1440px] h-[90px] bg-black">
        <h1 className="text-white font-['Forum'] text-[30px] px-5 tracking-[0.6px] font-normal">Brooklyn Public Library</h1>
        <nav className="px-5">
            <div className="flex justify-between gap-[40px]">
                <ul className="flex justify-between gap-[30px]">
                    {arr.map((item,i) => {return <li key={i}><a className="text-white text-[20px] leading-[50px]" href={`#${i}`}>{item}</a></li>})}
                </ul>
                <button><Image src="/images/icon_profile.png" alt="profile image" width={28} height={28}/></button>
            </div>
        </nav>
    </header> 
    );
}
 
export default Header ;