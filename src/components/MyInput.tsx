import { Dispatch, FunctionComponent, SetStateAction } from "react";
import hint from "../database/hint.json";
interface MyInputProps {
    item: string,
    data: { userFirst: string; userLast: string; mail: string; pwd: string; }
    setData: Dispatch<SetStateAction<{
        userFirst: string;
        userLast: string;
        mail: string;
        pwd: string;
    }>>
    validItem: { userFirst: boolean; userLast: boolean; mail: boolean; pwd: boolean; }
    setValidItem: Dispatch<SetStateAction<{
        userFirst: boolean;
        userLast: boolean;
        mail: boolean;
        pwd: boolean;
    }>>
    focus: { userFirst: boolean; userLast: boolean; mail: boolean; pwd: boolean; }
    setFocus: Dispatch<SetStateAction<{
        userFirst: boolean;
        userLast: boolean;
        mail: boolean;
        pwd: boolean;
    }>>
}
 
const MyInput: FunctionComponent<MyInputProps> = ({item, data, setData, validItem, setValidItem, focus, setFocus}) => {
    type item = keyof typeof data;
    return ( 
    <div>
        <label className="text-[15px] leading-[20px] tracking-[0.3px]" 
        htmlFor={item}>{item === "userFirst" ? "First name": item === "userLast" ? "Last name" : item === "userLast" ? "E-mail" : "Password"} &nbsp;
        {(data[item] || focus[item]) && (validItem[item]
        ? <span className="text-green-600">✔</span> 
        : <span className="text-red-600">✘</span>)}
        </label>
        <input
            className="border-[#BB945F] border-[1px] w-[200px]"
            type={item === "userFirst" || item === "userLast"?"text": item === "pwd"? "password":"email"}
            id={item}
            onChange={(e) => setData({...data, [item]:e.target.value})}
            value={data[item]}
            autoComplete="off"
            required
            aria-invalid={validItem ? "false" : "true"}
            aria-describedby={`${item}note`}
            onFocus={() => setFocus(pre =>({ ...pre, [item]: true}))}
            onBlur={() => setFocus(pre =>({ ...pre, [item]: false}))}
            />
        <p id={`${item}note`} className={focus[item] && !validItem[item] ? "text-[0.75rem] rounded-[0.5rem] bg-black text-white absolute left-[210px] top-[60px] p-[0.25rem]" : "absolute left-[-9999px]"}>
            {hint[item]}
        </p>
    </div> );
}
 
export default MyInput;