import { Dispatch, SetStateAction } from "react";
import bookBase from "../database/books.json";

interface CheckboxProps {
    setSeason:Dispatch<SetStateAction<book>>
    inputLink:Array<book>
    season:book
}
type book = keyof typeof bookBase
function ChackboxSeason({inputLink, season, setSeason}:CheckboxProps){
    const enterRadio =(e:React.KeyboardEvent<HTMLElement>) => {
        if(e.key === 'Enter'){
            setSeason((e.currentTarget.parentElement?.children[0] as HTMLInputElement)?.value as book);     
            }   
    }
    return ( 
        <ul className="flex my-[40px] justify-start gap-[90px] ml-[20px]">
        {inputLink.map(item => {return(
            <li key={item}>
                <input
                    type='radio'
                    id={`radio${item}`}
                    value={item}
                    onChange={ () =>setSeason(item) }
                    checked={ season === item }
                    style={{display:"none"}}
                />
                <label tabIndex={0}
                className="flex justify-center items-center gap-[20px] cursor-pointer" 
                htmlFor={`radio${item}`} 
                onClick={()=>setSeason(item)}
                onKeyDown={enterRadio}>
                    <div className="flex justify-center items-center w-[17px] h-[17px] rounded-[50%] border-[2px] border-black p-[2px]">
                        <span className={item === season ? "w-[7px] h-[7px] rounded-[50%] bg-black" : "w-[7px] h-[7px] rounded-[50%] bg-white"}></span>
                    </div>
                    <p className={item === season ? "font-bold" : "font-normal"}>{item}</p>
                </label>
            </li>
            )})
        }
        </ul>
     );
}
export default ChackboxSeason;