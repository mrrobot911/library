import { Dispatch, FunctionComponent, SetStateAction } from "react";

interface MyInputProps {
    item: string,
    data: string,
    setData: Dispatch<SetStateAction<{
        userFirst: string;
        userLast: string;
        mail: string;
        pwd: string;
    }>>
    validItem: boolean,
    focus: boolean,
    setFocus: Dispatch<SetStateAction<boolean>>
}
 
const MyInput: FunctionComponent<MyInputProps> = ({item, data, setData, validItem, focus, setFocus}) => {
    return ( 
    <div>
        <label className="text-[15px] leading-[20px] tracking-[0.3px]" 
        htmlFor="password">Password &nbsp;
        {(data || focus) && (validItem
        ? <span className="text-green-600">✔</span> 
        : <span className="text-red-600">✘</span>)}
        </label>
        <input
            className="border-[#BB945F] border-[1px] w-[200px]"
            type="password"
            id="password"
            onChange={(e) => setData({...userData, pwd:e.target.value})}
            value={data}
            required
            aria-invalid={validItem ? "false" : "true"}
            aria-describedby="pwdnote"
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            />
        <p id="pwdnote" className={focus && !validItem ? "text-[0.75rem] rounded-[0.5rem] bg-black text-white absolute left-[210px] top-[60px] p-[0.25rem]" : "absolute left-[-9999px]"}>
            text
        </p>
    </div> );
}
 
export default MyInput;