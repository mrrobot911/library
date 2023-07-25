'use client'
import { useAppSelector } from "@/store/hooks";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import ProfileData from "./ProfileData";

interface UserPanelProps {
    user: boolean
    setUser: Dispatch<SetStateAction<boolean>>
}
const UserPanel = ({ user, setUser}:UserPanelProps) => {
    const userData = useAppSelector((state) => state.user);
    const [ show, setShow ] = useState(false);
    const cardNumber = 'F00234030';
    const copyLink =() =>{
        navigator.clipboard.writeText(cardNumber);
        setShow(true);
        setTimeout(() => {
          setShow(false);
           }, 1000);
      }
    return ( 
        <div className="flex flex-row w-[600px] h-[400px] bg-white left-[300px] absolute z-[15] top-[1px] overflow-hidden">
            <div className="flex items-center justify-center min-w-[170px] bg-black">
                <div className="flex justify-between flex-col items-center gap-[15px]">
                    <div className="flex items-center justify-center w-[80px] h-[80px] bg-white">
                        <p className="text-[20px] text-[#BB945F] uppercase">{userData.firstname[0]}{userData.lastname[0]}</p>
                    </div>
                    <p className="bg-white text-[20px] capitalize py-[5px] px-[15px]">{userData.firstname} {userData.lastname}</p>
                </div>
            </div>
            <div className="relative w-[100%] px-[20px]">
                <p className="text-[40px] font-['Forum'] uppercase tracking-[0.8px] leading-[20px] my-[40px]">My profile</p>
                <ProfileData booksize={userData.books.length} fontsize={'20px'}/>
                <div className="mb-[20px]">
                    <p className="text-[25px] leading-[20px] mt-[20px] mb-[30px]">Rented books</p>
                    <ul className="overflow-y-scroll h-[60px] gap-[10px]">
                        {userData.books.length >= 0 
                        ? userData.books.map(item => {return(<li key={item} className="ml-[30px] text-[20px] tracking-[2px] list-disc capitalize">{item}</li>)}) 
                        : <p> No books yet</p>}
                    </ul>
                </div>
                <div className="flex gap-[15px] items-center">
                    <p>Card number</p>
                    <p className="text-[20px] text-[#BB945F]">{cardNumber}</p>
                    <button className="flex items-center justify-center" onClick={()=>copyLink()}>
                        <Image src={'/images/icon_copy.png'} width={13.5} height={12} alt="copy image"/>
                    </button>
                    {show && <p className="text-red-700 text-[12px]">copied to the buffer</p>}
                </div>
                <button onClick={()=>setUser(!user)} className="absolute right-[25px] top-[25px]"><svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 16.8507L17 2.00001" stroke="#0C0C0E" strokeWidth="3"/>
                        <path d="M2 2.14928L17 17" stroke="#0C0C0E" strokeWidth="3"/>
                        </svg>
                </button>
            </div>
        </div>
     );
}
 
export default UserPanel;