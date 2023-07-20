'use client'
import { Dispatch, FunctionComponent, SetStateAction, useEffect, useRef, useState } from "react";

interface LoginProps {
    setRegistr:Dispatch<SetStateAction<boolean>>
    registr:boolean
    setLogin:Dispatch<SetStateAction<boolean>>
    login:boolean
}

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Registr: FunctionComponent<LoginProps> = ({setRegistr, registr, setLogin, login}) => {
    const userRef = useRef<HTMLInputElement>(null);
    const errRef = useRef<HTMLInputElement>(null);

    const [ userFirst, setUserFirst ] = useState('');
    const [ validFirstName, setValidFirstName ] = useState(false);
    const [ userFirstFocus, setUserFirstFocus ] = useState(false);

    const [ userLast, setUserLast ] = useState('');
    const [ validLastName, setValidLastName ] = useState(false);
    const [ userLastFocus, setUserLastFocus ] = useState(false);

    const [ mail, setMail ] = useState('');
    const [ validMail, setValidMail ] = useState(false);
    const [ mailFocus, setMailFocus ] = useState(false);

    const [ pwd, setPwd ] = useState('');
    const [ validPwd, setValidPwd ] = useState(false);
    const [ pwdFocus, setPwdFocus ] = useState(false);

    const [ errMsg, setErrMsg ] = useState('');
    const [ success, setSuccess ] = useState(false);

    useEffect(() => {
        userRef.current?.focus();
    }, [])

    useEffect(() => {
        setValidFirstName(USER_REGEX.test(userFirst));
    }, [userFirst])

    useEffect(() => {
        setValidLastName(USER_REGEX.test(userLast));
    }, [userLast])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
    }, [pwd])

    useEffect(() => {
        setErrMsg('');
    }, [userFirst, userLast, pwd])
    
        const handleSubmit = async (e:React.ChangeEvent<HTMLFormElement>) => {
            e.preventDefault();

        const fData = JSON.stringify({firstname:userFirst, lastname: userLast, password: pwd});

        const response = await fetch('/api/register', {
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
            setUserFirst('');
            setUserLast('');
            setPwd('');
        }  
    }
    return ( 
        <section className=" top-[150px] right-[180px] z-10 bg-white absolute w-[250px] h-[382px]">
        <p ref={errRef} className={errMsg ? "text-red-500" : "absolute left-[-9999px]"} aria-live="assertive">{errMsg}</p>
        <h1 className="font-['Forum'] text-[20px] leading-[20px] tracking-[0.4px] uppercase text-center m-[20px]">Register</h1>
        <form className="w-[200px] mx-[20px] relative" onSubmit={handleSubmit}>
            <label className="text-[15px] leading-[20px] tracking-[0.3px]" htmlFor="firstName">First name</label>
            <input
                className="border-[#BB945F] border-[1px] w-[200px]"
                type="text"
                id="firstName"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUserFirst(e.target.value)}
                value={userFirst}
                required
                aria-invalid={validFirstName ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setUserFirstFocus(true)}
                onBlur={() => setUserFirstFocus(false)}
                />
            <p id="uidnote" className={userFirstFocus && userFirst && !validFirstName ? "text-[0.75rem] rounded-[0.5rem] bg-black text-white absolute left-[210px] top-[0px] p-[0.25rem]" : "absolute left-[-9999px]"}>
                От 4 до 24 символов.<br />
                Должен начинаться с буквы.<br />
                Может содержать английские буквы, цифры, тире и нижнее подчеркивание.
            </p>
            <label className="text-[15px] leading-[20px] tracking-[0.3px]" htmlFor="lastName">Last name</label>
            <input
                className="border-[#BB945F] border-[1px] w-[200px]"
                type="text"
                id="lastName"
                autoComplete="off"
                onChange={(e) => setUserLast(e.target.value)}
                value={userLast}
                required
                aria-invalid={validLastName ? "false" : "true"}
                aria-describedby="uidnote2"
                onFocus={() => setUserLastFocus(true)}
                onBlur={() => setUserLastFocus(false)}
                />
            <p id="uidnote2" className={userLastFocus && userLast && !validLastName ? "text-[0.75rem] rounded-[0.5rem] bg-black text-white absolute left-[210px] top-[20px] p-[0.25rem]" : "absolute left-[-9999px]"}>
                От 4 до 24 символов.<br />
                Должен начинаться с буквы.<br />
                Может содержать английские буквы, цифры, тире и нижнее подчеркивание.
            </p>
            <label className="text-[15px] leading-[20px] tracking-[0.3px]" htmlFor="email">E-mail</label>
            <input
                className="border-[#BB945F] border-[1px] w-[200px]"
                type="email"
                id="email"
                onChange={(e) => setMail(e.target.value)}
                value={mail}
                required
                aria-invalid={validMail ? "false" : "true"}
                aria-describedby="mailnote"
                onFocus={() => setMailFocus(true)}
                onBlur={() => setMailFocus(false)}
                />
            <p id="mailnote" className={mailFocus && !validMail ? "text-[0.75rem] rounded-[0.5rem] bg-black text-white absolute left-[210px] top-[40px] p-[0.25rem]" : "absolute left-[-9999px]"}>
                От 8 до 24 символов.<br />
                Должен содержать строчные и заглавные английские буквы, цифры и спец символы.<br />
                Включает следующие символы: <span aria-label="exclamation mark">@</span> <span aria-label="dot">.</span>
            </p>

            <label className="text-[15px] leading-[20px] tracking-[0.3px]" htmlFor="password">Password</label>
            <input
                className="border-[#BB945F] border-[1px] w-[200px]"
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                aria-invalid={validPwd ? "false" : "true"}
                aria-describedby="pwdnote"
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
                />
            <p id="pwdnote" className={pwdFocus && !validPwd ? "text-[0.75rem] rounded-[0.5rem] bg-black text-white absolute left-[210px] top-[60px] p-[0.25rem]" : "absolute left-[-9999px]"}>
                От 8 до 24 символов.<br />
                Должен содержать строчные и заглавные английские буквы, цифры и спец символы.<br />
                Включает следующие символы: <span aria-label="exclamation mark">!</span> <span aria-label="exclamation mark">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
            </p>
            <button className="font-bold text-[10px] tracking-[1px] px-[20px] py-[9px] border-black border-[1px] mt-[20px]" 
            disabled={!validFirstName || !validLastName || !validPwd || validMail ? true : false}
            >Завершить регистрацию</button>
        </form>
        <div className="flex gap-[10px] ml-[25px] mt-[10px]">
                <p className="text-[10px] tracking-[1px]">Already have an account?</p>
                <p className="text-[10px] tracking-[1px] cursor-pointer" onClick={()=>{setRegistr(!registr);setLogin(!login)}}><b>Login</b></p>
            </div>
        <button className="absolute top-[15px] right-[15px]" 
            onClick={()=>setRegistr(!registr)}
            disabled={!!errMsg}
            >
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 16.8507L17 2.00003" stroke="#0C0C0E" stroke-width="3"/>
            <path d="M2 2.14926L17 17" stroke="#0C0C0E" stroke-width="3"/>
            </svg>
        </button >
    </section>
    )}
 
export default Registr;