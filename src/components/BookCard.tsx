'use client'
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setBook } from "@/store/userSlice";
import Image from "next/image";
interface BookCardProps {
    name:string,
    author:string,
    text:string,
    image:string
}
 
function BookCard({name,author,text,image}: BookCardProps){
    const user = useAppSelector((state) => state.user);
    
    const dispatch = useAppDispatch();
    async function buyBook() {
        const data = {
            book: name,
            id: user.id,
        }
        const response = await fetch('/api/v1/buy', {
            body: JSON.stringify(data),
            headers: {
            'Content-Type': 'application/json',
            },
            method: 'POST',
        })
        if(!response.ok) {
            const err = await response.json();
            console.log(err);
        } else {
            const data = await response.json();
            dispatch(setBook(data.books));
        }
    }
    return ( 
        <article className="w-[550px] h-[555px] border-[1px] pl-[20px] py-[15px] border-black duration-500 relative">
            <h3 className="font-['Forum'] text-[20px] leading-[40px] capitalize">Staff Picks</h3>
            <hr className="h-[1px] w-[60px] bg-[#BB945F] border-0 mb-[20px]"/>
            <h4 className="text-[15px] font-bold tracking-[2px] leading-[40px] uppercase">{name}</h4>
            <h5 className="text-[15px] font-bold tracking-[2px] leading-[40px] mb-[20px] capitalize">{author}</h5>
            <p className="w-[355px] text-[15px] tracking-[2px] leading-[40px] capitalize">{text}</p>
            <Image className="absolute bottom-[-1px] right-[-40px]" width={200} height={300} src={image} alt={name} />
            {!user.books.includes(name) 
            ? <button onClick={()=>buyBook()} className="absolute bottom-[15px] left-[20px] text-[10px] font-bold px-[27px] py-[9px] tracking-[1px] border-black border-[1px]">Buy</button>
            : <button className="absolute bottom-[15px] left-[20px] text-[#BB945F] text-[10px] font-bold px-[27px] py-[9px] tracking-[1px] border-[#BB945F] border-[1px]">Own</button>
        }
        </article>
     );
}
 
export default BookCard;