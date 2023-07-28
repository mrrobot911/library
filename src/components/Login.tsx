'use client'
import axios from "axios";
import { useAppDispatch } from "@/store/hooks";
import { setAuth, setBook, setFirstName, setId, setLastName } from "@/store/userSlice";
import { Dispatch, FunctionComponent, SetStateAction, useEffect, useRef, useState } from "react";

interface LoginProps {
    setLogin:Dispatch<SetStateAction<boolean>>
    login:boolean
    setRegistr:Dispatch<SetStateAction<boolean>>
    registr:boolean
}
const Login: FunctionComponent<LoginProps> = ({setLogin, login, setRegistr, registr}) => {

    const userRef = useRef<HTMLInputElement>(null);
    const errRef = useRef<HTMLInputElement>(null);
    
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    
    const dispatch = useAppDispatch();
    useEffect(() => {
        userRef.current?.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e:React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        const fData = {email:user, password: pwd};
        try{

            const response = await axios.post('/api/v1/login', {
                data: fData,
                headers: {
                'Content-Type': 'application/json',
                },
            });
            dispatch(setFirstName(response.data.firstname));
            dispatch(setLastName(response.data.lastname));
            dispatch(setId(response.data.id));
            dispatch(setBook(response.data.books));
            dispatch(setAuth(true));
                        
            setUser('');
            setPwd('');
            setLogin(!login);
        } catch(err:any) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 403) {
                setErrMsg(err.response.data.massage);
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current?.focus();
        }
    }
    
    return ( 
    <section className="w-[250px] h-[262px] top-[150px] right-[180px] z-20 bg-white absolute">
        <div className="relative">
            <p className="font-['Forum'] text-[20px] leading-[20px] tracking-[0.4px] uppercase text-center mt-[20px]">Login</p>
            <p ref={errRef} className={errMsg ? "text-red-500 h-[20px] ml-[20px]" : "h-[20px]"} aria-live="assertive">{errMsg}</p>
            <form className="w-[200px] h-[160px] mx-[20px]" onSubmit={handleSubmit}>
                <label className="text-[15px] leading-[20px] tracking-[0.3px]" htmlFor="username">E-mail or readers card</label>
                <input
                    className="border-[#BB945F] border-[1px] w-[200px]"
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                    />
                <label htmlFor="password">Password</label>
                <input
                    className="border-[#BB945F] border-[1px] w-[200px]"
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                    />
                <button className={user && pwd 
                ? "font-bold text-[10px] tracking-[1px] px-[20px] py-[9px] border-black border-[1px] mt-[20px] duration-200 hover:bg-[#BB945F] hover:border-[#BB945F]"
                :"font-bold text-[10px] tracking-[1px] px-[20px] py-[9px] border-black border-[1px] mt-[20px]"}
                disabled={user && pwd ? false : true}
                >Log In</button>
            </form>
            <div className="flex gap-[10px] ml-[25px] mt-[10px]">
                <p className="text-[10px] tracking-[1px]">Don’t have an account?</p>
                <p className="text-[10px] tracking-[1px] cursor-pointer" onClick={()=>{setLogin(!login); setRegistr(!registr)}}><b>Register</b></p>
            </div>
            <button className="absolute top-[-5px] right-[15px]" 
            onClick={()=>setLogin(!login)}
            disabled={!!errMsg}
            >
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 16.8507L17 2.00003" stroke="#0C0C0E" strokeWidth="3"/>
                <path d="M2 2.14926L17 17" stroke="#0C0C0E" strokeWidth="3"/>
                </svg>
            </button >
        </div>
    </section> 
    );
}
 
export default Login;