'use client'
import { useEffect, useState } from "react";
import Header_h2 from "./Header_h2";
import ChackboxSeason from "./ChackboxSeason";
import BookCard from "./BookCard";
import bookBase from "../database/books.json";

type book = keyof typeof bookBase;
const Favorites = () => {
    const inputLink:Array<book> = Object.keys(bookBase) as Array<keyof typeof bookBase>;
    const [season, setSeason] = useState<book>('Winter');
    const [bookSet, setbookSet] = useState(bookBase[season]);
    useEffect(() => {
      setbookSet(bookBase[season])
    }, [season])
    
    return ( 
      <section>
        <Header_h2 letter="favorites" id="1" />
        <p className="font-bold ml-[20px] text-[20px] mb-[40px]">Pick favorites of season</p>
        <ChackboxSeason inputLink={inputLink} season={season} setSeason={setSeason}/>
        <div className="flex flex-col items-center flex-wrap mx-[20px] justify-between gap-y-[40px] mb-[40px] lg:flex-row">
          { bookSet.map(item => <BookCard key={item.name} name={item.name} author={item.author} text={item.text} image={item.image}/>)}
        </div>
      </section>
     );
}
 
export default Favorites;