import { FunctionComponent } from "react";

interface CheckboxProps {
    radio: number
    setRadio:(action: number | ((prevState: number) => number)) => void
    inputLink:Array<number>
}
 
const CheckboxSlider: FunctionComponent<CheckboxProps> = ({radio, setRadio, inputLink}) => {

    const radioBtn = (e:React.ChangeEvent<HTMLInputElement>) => { 
        setRadio(+e.target.value)  
    }
    return ( 
        <ul className="flex my-[40px] gap-[10px] justify-center">
        {inputLink.map(item => {return(
            <li key={item}>
                <input
                    type='radio'
                    id={`radio${item}`}
                    value={item}
                    onChange={ (e) =>radioBtn(e) }
                    checked={ radio === item }
                    style={{display:"none"}}
                />
                <label className="flex justify-center w-[16px]" 
                htmlFor={`radio${item}`} 
                onClick={()=>setRadio(item)}>
                    <span 
                    className={item === radio 
                        ? "w-[16px] h-[16px] rounded-[8px] bg-[#BB945F]" 
                        : "w-[16px] h-[16px] rounded-[8px] bg-[#0C0C0E]"}>
                    </span>
                </label>
            </li>
            )})
        }
        </ul>
     );
}
export default CheckboxSlider;