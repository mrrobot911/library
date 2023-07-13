'use client'
import { FunctionComponent, useEffect, useState } from "react";
import Header_h2 from "../scripts/Header_h2";
import ChackboxSeason from "../scripts/ChackboxSeason";
import BookCard from "../scripts/BookCard";
import bookBase from "../database/books.json";

interface FavoritesProps {
}
const book = bookBase;
 
const Favorites: FunctionComponent<FavoritesProps> = () => {
    const [season, setSeason] = useState<keyof typeof book>('Winter');
    const [bookSet, setbookSet] = useState(book[season]);
    const inputLink = ['Winter','Spring','Summer','Autumn'];
    useEffect(() => {
      setbookSet(book[season])
    }, [season])
    
    return ( 
        <section>
            <Header_h2 letter="favorites" />
            <p className="font-bold ml-[20px] text-[20px] mb-[40px]">Pick favorites of season</p>
            <ChackboxSeason inputLink={inputLink} season={season} setSeason={setSeason}/>
            <div className="flex">
              { bookSet.map(item => <BookCard key={item.name} name={item.name} author={item.author} text={item.text} image={item.image}/>)}
            </div>
        </section>
     );
}
 
export default Favorites;