import Image from "next/image";

interface BookCardProps {
    name:string,
    author:string,
    text:string,
    image:string
}
 
function BookCard({name,author,text,image}: BookCardProps){
    return ( 
        <article className="w-[550px] h-[555px] border-[1px] pl-[20px] py-[15px] border-black relative">
            <h3 className="font-['Forum'] text-[20px] leading-[40px] capitalize">Staff Picks</h3>
            <hr className="h-[1px] w-[60px] bg-[#BB945F] border-0 mb-[20px]"/>
            <h4 className="text-[15px] font-bold tracking-[2px] leading-[40px] uppercase">{name}</h4>
            <h5 className="text-[15px] font-bold tracking-[2px] leading-[40px] mb-[20px] capitalize">{author}</h5>
            <p className="w-[355px] text-[15px] tracking-[2px] leading-[40px] capitalize">{text}</p>
            <Image className="absolute bottom-[-1px] right-[-40px]" width={200} height={300} src={image} alt={name} />
            <button className="absolute bottom-[15px] left-[20px] text-[10px] font-bold px-[27px] py-[9px] tracking-[1px] border-black border-[1px]">Buy</button>
        </article>
     );
}
 
export default BookCard;