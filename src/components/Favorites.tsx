'use client'
import { useEffect, useState } from "react";
import Header_h2 from "./Header_h2";
import ChackboxSeason from "./ChackboxSeason";
import BookCard from "./BookCard";
import bookBase from "../database/books.json";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setAuth, setBook, setCards, setFirstName, setId, setLastName } from "@/store/userSlice";

type book = keyof typeof bookBase;
const Favorites = () => {
    const inputLink:Array<book> = Object.keys(bookBase) as Array<keyof typeof bookBase>;
    const [season, setSeason] = useState<book>('Winter');
    const [bookSet, setbookSet] = useState(bookBase[season]);
    const dispatch = useAppDispatch();
    const userData = useAppSelector((state) => state.user.cards);
    useEffect(() => {
      setbookSet(bookBase[season])
    }, [season])
    useEffect(() => {
      handleSubmit();  
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSubmit = async () => {
      try{
          const response = await axios.get('/api/v1/books');        
          await dispatch(setCards(response.data.books));
          if (response.data.userdata) {
            dispatch(setFirstName(response.data.userdata.firstname));
            dispatch(setLastName(response.data.userdata.lastname));
            dispatch(setId(response.data.userdata.id));
            dispatch(setBook(response.data.userdata.books));
            dispatch(setAuth(true));
          }       
      } catch(err:any) {
          if (!err?.response) {
            console.log('No Server Response');
          } else if (err.response?.status === 403) {
            console.log(err.response.data.massage);
          } else {
            console.log('Books fetching failed');
          }
      }
    }    
    return ( 
      <section>
        <Header_h2 letter="favorites" id="1" />
        <p className="font-bold ml-[20px] text-[20px] mb-[40px]">Pick favorites of season</p>
        <ChackboxSeason inputLink={inputLink} season={season} setSeason={setSeason}/>
        <div className="flex flex-col items-center flex-wrap mx-[20px] justify-between gap-y-[40px] mb-[40px] lg:flex-row">
          { userData.filter(it=>it.season===season).map((item,num) => <BookCard key={num} name={item.name} author={item.author} text={item.text} image={item.image}/>)}
        </div>
      </section>
     );
}
 
export default Favorites;