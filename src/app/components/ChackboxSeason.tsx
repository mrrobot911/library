import { Dispatch, SetStateAction } from "react";
import bookBase from "../database/books.json";

interface CheckboxProps {
    setSeason:Dispatch<SetStateAction<keyof typeof bookBase>>
    inputLink:string[]
    season:string
}
 
function ChackboxSeason({inputLink, season, setSeason}:CheckboxProps){

    const radioBtn = (e:React.ChangeEvent<HTMLInputElement>) => { 
        setSeason(e.target.value);
    }
    return ( 
        <ul className="flex my-[40px] justify-start gap-[90px] ml-[20px]">
        {inputLink.map(item => {return(
            <li key={item}>
                <input
                    type='radio'
                    id={`radio${item}`}
                    value={item}
                    onChange={ (e) =>radioBtn(e) }
                    checked={ season === item }
                    style={{display:"none"}}
                />
                <label 
                className="flex justify-center items-center gap-[20px]" 
                htmlFor={`radio${item}`} 
                onClick={()=>setSeason(item)}>
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