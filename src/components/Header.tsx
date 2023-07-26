'use client'
import { useState } from 'react';
import Login from './Login';
import Registr from './Registr';
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setAuth, setBook, setFirstName, setId, setLastName } from "@/store/userSlice";
import UserPanel from './UserPanel';

const arr = [
    "About",
    "Favorites",
    "Coffee shop",
    "Contacts",
    "Library Card"
]
 
const Header = () => {
    const userData = useAppSelector((state) => state.user);
    const auth = useAppSelector((state) => state.user.auth);
    const [ menuUser, setMenuUser ] = useState(false);
    const [ login, setLogin ] = useState<boolean>(false);
    const [ registr, setRegistr ] = useState<boolean>(false);
    const [ user, setUser ] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const loginBtn = () => {
        setLogin(!login);
        setMenuUser(!menuUser);
    }
    const registrBtn = () => {
        setRegistr(!registr);
        setMenuUser(!menuUser);
    }
    const profileBtn = () => {
        setUser(!user)
        setMenuUser(!menuUser);
    }
    function resetUserData (){
        dispatch(setAuth(false));
        dispatch(setBook([]));
        dispatch(setFirstName(''));
        dispatch(setLastName(''));
        dispatch(setId(''));
    }
    return ( 
    <header className="flex relative items-center justify-between max-w-[1440px] h-[90px] bg-black">
        <h1 className="text-white font-['Forum'] text-[30px] px-[20px] leading-[50px] tracking-[0.6px] font-normal">Brooklyn Public Library</h1>
        <div className="flex flex-row px-5 items-center justify-center">
            <nav className="flex justify-between gap-[40px]">
                <ul className="flex justify-between gap-[30px]">
                    {arr.map((item,i) => {return <li key={i}><a className="text-white text-[20px] leading-[50px]" href={`#${i}`}>{item}</a></li>})}
                </ul>
            </nav>
            { auth ? <p className="text-[15px] text-[#BB945F] p-[5px] bg-white rounded-[50%] cursor-pointer ml-[40px]"onClick={()=>setMenuUser(!menuUser)}>{`${userData.firstname[0]}${userData.lastname[0]}`}</p> : <a className="block ml-[40px] cursor-pointer"onClick={()=>setMenuUser(!menuUser)}><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14ZM18.6667 7.77778C18.6667 10.3551 16.5774 12.4444 14.0001 12.4444C11.4227 12.4444 9.33339 10.3551 9.33339 7.77778C9.33339 5.20045 11.4227 3.11111 14.0001 3.11111C16.5774 3.11111 18.6667 5.20045 18.6667 7.77778ZM19.4998 16.2781C20.9584 17.7367 21.7778 19.715 21.7778 21.7778H14L6.22225 21.7778C6.22225 19.715 7.0417 17.7367 8.50031 16.2781C9.95893 14.8194 11.9372 14 14 14C16.0628 14 18.0411 14.8194 19.4998 16.2781Z" fill="white"/>
            </svg></a> }
        </div>
        {menuUser && <div className='absolute bg-white w-[80px] h-[115px] right-[20px] top-[90px] z-10 text-center'>
            <p className='text-[15px] font-bold leading-[20px] my-[5px]'>Profile</p>
            <hr className='h-[1px] w-[40px] mx-auto bg-[#BB945F] border-0 mb-[15px]'/>
            {auth ? <a className='block mb-[10px] cursor-pointer' onClick={()=>profileBtn()}>My profile</a> : <a className='block mb-[10px] cursor-pointer' onClick={()=>loginBtn()}>Log In</a>}
            {auth ? <a className='block cursor-pointer' onClick={()=>resetUserData()}>Log Out</a> : <a className='block cursor-pointer' onClick={()=>registrBtn()}>Register</a>}
            </div>}
        {login && <Login setLogin={setLogin} login={login} setRegistr={setRegistr} registr={registr}/>}
        {registr && <Registr setRegistr={setRegistr} registr={registr} setLogin={setLogin} login={login}/>}
        {auth && user && <UserPanel setUser={setUser} user={user} />}
    </header> 
    );
}
 
export default Header ;