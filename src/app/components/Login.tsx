'use client'
import Link from "next/link";
import axios from "../utils/url";
import { Dispatch, FunctionComponent, SetStateAction, useEffect, useRef, useState } from "react";
import { AxiosError } from "axios";

interface LoginProps {
    setLogin:Dispatch<SetStateAction<boolean>>
    login:boolean
}

const Login: FunctionComponent<LoginProps> = ({setLogin, login}) => {
    // const navigate = useNavigate();
    // const location = useLocation();
    // const from = location.state?.from?.pathname || "/";

    const userRef = useRef<HTMLInputElement>(null);
    const errRef = useRef<HTMLInputElement>(null);

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    // useEffect(() => {
    //     userRef.current.focus();
    // }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e:React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        const fData = new FormData()
        fData.append("username", user)
        fData.append("password", pwd)

        try {
            const response = await axios.post("/login", fData,
            {
            headers: { 'Content-Type': "multipart/form-data" },
            });
            console.log(response.data);
            
            // const role = response?.data?.role;
            // const id = response?.data.id;

            // localStorage.setItem('refreshToken', response?.data.refresh_token)
            // setAuth({ user, pwd, accessToken, score, games, role, id, image });
            setUser('');
            setPwd('');
            
            // navigate(from, { replace: true });
        } catch ( err ) {
            if (err instanceof AxiosError){
                if (!err?.response) {
                    setErrMsg('No Server Response');
                } else if (err.response?.status === 403) {
                    setErrMsg('Invalid credentials');
                } else if (err.response?.status === 401) {
                    setErrMsg('Unauthorized');
                } else {
                    setErrMsg('Login Failed');
                }
            }
            // errRef.current.focus();
        }
    }
    return ( 
    <section className="w-[250px] h-[262px] top-[150px] right-[180px] z-10 bg-white absolute">
        <div className="relative">
            <p className="font-['Forum'] text-[20px] leading-[20px] tracking-[0.4px] uppercase text-center my-[20px]">Login</p>
            <form className="w-[200px] h-[160px] mx-[20px]" onSubmit={handleSubmit}>
                <label className="text-[15px] leading-[20px] tracking-[0.3px]" htmlFor="username">E-mail or readers card</label>
                <input
                    className="border-[#BB945F] border-[1px]"
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
                    className="border-[#BB945F] border-[1px]"
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                    />
                <button className="font-bold text-[10px] tracking-[1px] px-[20px] py-[9px] border-black border-[1px] mt-[20px]">Log In</button>
            </form>
            <div>
                <p>Don’t have an account?</p>
                <Link href="/">Register</Link>
            </div>
            <button className="absolute top-[-5px] right-[15px]" onClick={()=>setLogin(!login)}><svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 16.8507L17 2.00003" stroke="#0C0C0E" stroke-width="3"/>
                <path d="M2 2.14926L17 17" stroke="#0C0C0E" stroke-width="3"/>
                </svg>
            </button>
        </div>
    </section> 
    );
}
 
export default Login;