'use client'
import { FunctionComponent, useEffect, useState } from "react";
import Header_h2 from "../scripts/Header_h2";
import ChackboxSeason from "../scripts/ChackboxSeason";
import BookCard from "../scripts/BookCard";
import bookBase from "../database/books.json";

interface FavoritesProps {
}
 
const Favorites: FunctionComponent<FavoritesProps> = () => {
    const [season, setSeason] = useState<keyof typeof bookBase>('Winter');
    const [bookSet, setbookSet] = useState(bookBase[season]);
    const inputLink = Object.keys(bookBase);
    useEffect(() => {
      setbookSet(bookBase[season])
    }, [season])
    
    return ( 
        <section>
            <Header_h2 letter="favorites" />
            <p className="font-bold ml-[20px] text-[20px] mb-[40px]">Pick favorites of season</p>
            <ChackboxSeason inputLink={inputLink} season={season} setSeason={setSeason}/>
            <div className="flex flex-wrap mx-[20px] gap-x-[260px] gap-y-[40px]">
              { bookSet.map(item => <BookCard key={item.name} name={item.name} author={item.author} text={item.text} image={item.image}/>)}
            </div>
        </section>
     );
}
 
export default Favorites;