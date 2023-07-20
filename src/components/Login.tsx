'use client'
import Link from "next/link";
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

    useEffect(() => {
        userRef.current?.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e:React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        const fData = JSON.stringify({username:user, password: pwd});

        const response = await fetch('/api/login', {
            body: fData,
            headers: {
            'Content-Type': 'application/json',
            },
            method: 'POST',
        })
        if(!response.ok) {
            const err = await response.json();
            setErrMsg(err.massage);
            errRef.current?.focus();
        } else {
            const data = await response.json();
            console.log(response.status === 200);
            console.log(data);
            setUser('');
            setPwd('');
        }    
    }
    return ( 
    <section className="w-[250px] h-[262px] top-[150px] right-[180px] z-10 bg-white absolute">
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
                <button className="font-bold text-[10px] tracking-[1px] px-[20px] py-[9px] border-black border-[1px] mt-[20px]"
                disabled={!user || !pwd ? true : false}
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
                <path d="M2 16.8507L17 2.00003" stroke="#0C0C0E" stroke-width="3"/>
                <path d="M2 2.14926L17 17" stroke="#0C0C0E" stroke-width="3"/>
                </svg>
            </button >
        </div>
    </section> 
    );
}
 
export default Login;