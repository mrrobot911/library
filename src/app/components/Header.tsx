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
    <header className="container relative h-[600px] w-[1440px]">
        <div className="absolute inset-0 h-[600px]">
            <Image
                src="/images/biblio.jpeg"
                alt="background image"
                fill
                objectFit="cover"
            />
        </div>
        <div className="relative z-10 flex items-center px-5 bg-black justify-between h-[90px]">
            <h4 className="text-white">Brooklyn Public Library</h4>
            <ul className="flex justify-between gap-3">
                {arr.map(item => {return <li key={item}><a className="text-white">{item}</a></li>})}
            </ul>
        </div>
        <h1 className="relative z-10 text-white">Welcome to the Brooklyn Library</h1>
    </header> 
    );
}
 
export default Header ;