import Image from "next/image";

interface BookCardProps {
    name:string,
    author:string,
    text:string,
    image:string
}
 
function BookCard({name,author,text,image}: BookCardProps){
    return ( 
        <article className="w-[550px] h-[555px]">
            <h3 className="font-['Forum'] text-[20px] capitalize">Staff Picks</h3>
            <hr/>
            <h4>{name}</h4>
            <h5>{author}</h5>
            <p>{text}</p>
            <Image width={200} height={300} src={image} alt={name} />
            <button>Buy</button>
        </article>
     );
}
 
export default BookCard;