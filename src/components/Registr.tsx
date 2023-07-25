'use client'
import axios from "axios";
import { Dispatch, FunctionComponent, SetStateAction, useEffect, useRef, useState } from "react";

interface LoginProps {
    setRegistr:Dispatch<SetStateAction<boolean>>
    registr:boolean
    setLogin:Dispatch<SetStateAction<boolean>>
    login:boolean
}

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /(.+)@(.+){2,}\.(.+){2,}/;

const Registr: FunctionComponent<LoginProps> = ({setRegistr, registr, setLogin, login}) => {
    const userRef = useRef<HTMLInputElement>(null);
    const errRef = useRef<HTMLInputElement>(null);

    const [ userData, setUserData ] = useState({userFirst:'', userLast:'', mail:'', pwd:''});
    const [ validData, setValidData ] = useState({userFirst:false, userLast:false, mail:false, pwd:false});
    const [ userFocus, setUserFocus ] = useState({userFirst:false, userLast:false, mail:false, pwd:false});
    const [ errMsg, setErrMsg ] = useState('');

    useEffect(() => {
        userRef.current?.focus();
    }, [])

    useEffect(() => {
        setValidData({...validData, userFirst:USER_REGEX.test(userData.userFirst)});
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userData.userFirst])

    useEffect(() => {
        setValidData({...validData, userLast:USER_REGEX.test(userData.userLast)});
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userData.userLast])

    useEffect(() => {
        setValidData({...validData, mail:EMAIL_REGEX.test(userData.mail)});
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userData.mail])

    useEffect(() => {
        setValidData({...validData, pwd:PWD_REGEX.test(userData.pwd)});
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userData.pwd])

    useEffect(() => {
        setErrMsg('');
    }, [userData])
    
        const handleSubmit = async (e:React.ChangeEvent<HTMLFormElement>) => {
            e.preventDefault();

        const fData = { firstname:userData.userFirst,
                        lastname: userData.userLast,
                        email:userData.mail,
                        password: userData.pwd};
        try{
            const response = await axios.post('/api/v1/register', {
                data: fData,
                headers: {
                'Content-Type': 'application/json',
                },
            });
            const data = await response.data.message;
            data && setUserData({userFirst:'',userLast:'',mail:'',pwd:''});
            setRegistr(false);
        } catch(err:any) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {              
                setErrMsg(err.response?.data.message);
            } else {
                setErrMsg('Registration Failed');
            }
            errRef.current?.focus();
        }
    }
    return ( 
        <section className=" top-[150px] right-[180px] z-10 bg-white absolute w-[250px] h-[382px]">
        <h1 className="font-['Forum'] text-[20px] leading-[20px] tracking-[0.4px] uppercase text-center m-[20px]">Register</h1>
        <form className="w-[200px] mx-[20px] relative" onSubmit={handleSubmit}>
            <label className="text-[15px] leading-[20px] tracking-[0.3px]" 
            htmlFor="firstName">First name &nbsp;
            {(userData.userFirst || userFocus.userFirst) && (validData.userFirst
            ? <span className="text-green-600">✔</span> 
            : <span className="text-red-600">✘</span>)}
            </label>
            <input
                className="border-[#BB945F] border-[1px] w-[200px]"
                type="text"
                id="firstName"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUserData({...userData,userFirst:e.target.value})}
                value={userData.userFirst}
                required
                aria-invalid={validData.userFirst ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setUserFocus({...userFocus, userFirst:true})}
                onBlur={() => setUserFocus({...userFocus, userFirst:false})}
                />
            <p id="uidnote" className={userFocus.userFirst && userData.userFirst && !validData.userFirst ? "text-[0.75rem] rounded-[0.5rem] bg-black text-white absolute left-[210px] top-[0px] p-[0.25rem]" : "absolute left-[-9999px]"}>
                От 4 до 24 символов.<br />
                Должен начинаться с буквы.<br />
                Может содержать английские буквы, цифры, тире и нижнее подчеркивание.
            </p>
            <label className="text-[15px] leading-[20px] tracking-[0.3px]" 
            htmlFor="lastName">Last name &nbsp;
            {(userData.userLast || userFocus.userLast) && (validData.userLast
            ? <span className="text-green-600">✔</span> 
            : <span className="text-red-600">✘</span>)}
            </label>
            <input
                className="border-[#BB945F] border-[1px] w-[200px]"
                type="text"
                id="lastName"
                autoComplete="off"
                onChange={(e) => setUserData({...userData, userLast:e.target.value})}
                value={userData.userLast}
                required
                aria-invalid={validData.userLast ? "false" : "true"}
                aria-describedby="uidnote2"
                onFocus={() => setUserFocus({...userFocus, userLast:true})}
                onBlur={() => setUserFocus({...userFocus, userLast:false})}
                />
            <p id="uidnote2" className={userFocus.userLast && userData.userLast && !validData.userLast ? "text-[0.75rem] rounded-[0.5rem] bg-black text-white absolute left-[210px] top-[20px] p-[0.25rem]" : "absolute left-[-9999px]"}>
                От 4 до 24 символов.<br />
                Должен начинаться с буквы.<br />
                Может содержать английские буквы, цифры, тире и нижнее подчеркивание.
            </p>
            <label className="text-[15px] leading-[20px] tracking-[0.3px]" 
            htmlFor="email">E-mail &nbsp;
            {(userData.mail || userFocus.mail) && (validData.mail
            ? <span className="text-green-600">✔</span> 
            : <span className="text-red-600">✘</span>)}
            </label>
            <input
                className="border-[#BB945F] border-[1px] w-[200px]"
                type="email"
                id="email"
                ref={errRef}
                onChange={(e) => setUserData({...userData, mail:e.target.value})}
                value={userData.mail}
                required
                aria-invalid={validData.mail ? "false" : "true"}
                aria-describedby="mailnote"
                onFocus={() => setUserFocus({...userFocus, mail:true})}
                onBlur={() => setUserFocus({...userFocus, mail:false})}
                />
            <p id="mailnote" className={userFocus.mail && !validData.mail ? "text-[0.75rem] rounded-[0.5rem] bg-black text-white absolute left-[210px] top-[40px] p-[0.25rem]" : "absolute left-[-9999px]"}>
                Должен содержать строчные и заглавные английские буквы.<br />
                Включает следующие символы: <span aria-label="exclamation mark">@</span> <span aria-label="dot">.</span>
            </p>

            <label className="text-[15px] leading-[20px] tracking-[0.3px]" 
            htmlFor="password">Password &nbsp;
            {(userData.pwd || userFocus.pwd) && (validData.pwd
            ? <span className="text-green-600">✔</span> 
            : <span className="text-red-600">✘</span>)}
            </label>
            <input
                className="border-[#BB945F] border-[1px] w-[200px]"
                type="password"
                id="password"
                onChange={(e) => setUserData({...userData, pwd:e.target.value})}
                value={userData.pwd}
                required
                aria-invalid={validData.pwd ? "false" : "true"}
                aria-describedby="pwdnote"
                onFocus={() => setUserFocus({...userFocus, pwd:true})}
                onBlur={() => setUserFocus({...userFocus, pwd:false})}
                />
            <p id="pwdnote" className={userFocus.pwd && !validData.pwd ? "text-[0.75rem] rounded-[0.5rem] bg-black text-white absolute left-[210px] top-[60px] p-[0.25rem]" : "absolute left-[-9999px]"}>
                От 8 до 24 символов.<br />
                Должен содержать строчные и заглавные английские буквы, цифры и спец символы.<br />
                Включает следующие символы: <span aria-label="exclamation mark">!</span> <span aria-label="exclamation mark">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
            </p>
            <button className="font-bold text-[10px] tracking-[1px] px-[20px] py-[9px] border-black border-[1px] mt-[20px]" 
            disabled={!validData.userFirst || !validData.userLast || !validData.pwd || !validData.mail ? true : false}
            >Sign Up</button>
        </form>
        <div className="flex gap-[10px] ml-[25px] mt-[10px]">
                <p className="text-[10px] tracking-[1px]">Already have an account?</p>
                <p className="text-[10px] tracking-[1px] cursor-pointer" onClick={()=>{setRegistr(!registr);setLogin(!login)}}><b>Login</b></p>
        </div>
        {errMsg && <p className="mx-[20px] text-[12px] text-red-600">{errMsg}</p>}
        <button className="absolute top-[15px] right-[15px]" 
            onClick={()=>setRegistr(!registr)}
            >
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 16.8507L17 2.00003" stroke="#0C0C0E" strokeWidth="3"/>
            <path d="M2 2.14926L17 17" stroke="#0C0C0E" strokeWidth="3"/>
            </svg>
        </button >
    </section>
    )}
 
export default Registr;