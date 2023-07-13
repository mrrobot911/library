
'use client'
import { FunctionComponent, useState } from "react";

interface CheckboxProps {
}
 
const Checkbox: FunctionComponent<CheckboxProps> = () => {
    const [isRadio, setIsRadio] = useState<number>(1);
    const inputLink = [1,2,3];
    const radioBtn = (e:React.ChangeEvent<HTMLInputElement>) => { 
        setIsRadio(+e.target.value)  
    }
    return ( 
        <ul className="flex mt-[40px] mx-auto">
        {inputLink.map(item => {return(
            <li key={item}>
                <input
                    type='radio'
                    id={`radio${item}`}
                    value={item}
                    onChange={ (e) =>radioBtn(e) }
                    checked={ isRadio === item }
                    style={{display:"none"}}
                />
                <label className="flex justify-center w-[16px] gap-[10px]" htmlFor={`radio${item}`} onClick={()=>setIsRadio(item)}><span className={item === isRadio ? "w-[16px] h-[16px] rounded-[8px] bg-[#BB945F]" : "w-[16px] h-[16px] rounded-[8px] bg-[#0C0C0E]"}></span></label>
            </li>
            )})
        }
        </ul>
     );
}
export default Checkbox;