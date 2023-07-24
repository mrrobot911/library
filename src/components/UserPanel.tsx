'use client'
import { useAppSelector } from "@/store/hooks";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

interface UserPanelProps {
    user: boolean
    setUser: Dispatch<SetStateAction<boolean>>
}
const UserPanel = ({ user, setUser}:UserPanelProps) => {
    const userData = useAppSelector((state) => state.user);
    const profileData = [
        {name:'visits',
        picture:'/images/Union.png',
        data:23
        },
        {name:'bonuses',
        picture: '/images/Star.png',
        data: 1240
        },
        {name:'Books',
        picture: '/images/book.png',
        data: userData.books.length
        }
    ]
    console.log(userData);
    
    return ( 
        <div className="flex flex-row w-[600px] h-[400px] bg-white left-[300px] absolute z-[15] top-[1px]">
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
                <div className="flex gap-[20px]">
                    {profileData.map(item =>{return(
                        <div key={item.name} className="flex flex-col gap-[10px] items-center capitalize">
                            <p className="text-[20px] tracking-[0.4px]">{item.name}</p>
                            <Image src={item.picture} width={20} height={21} alt={item.name}/>
                            <p className="text-[10px] tracking-[0.2px]">{item.data}</p>
                        </div>
                    )})}
                </div>
                <div className="mb-[30px]">
                    <p className="text-[25px] leading-[20px] mt-[20px] mb-[30px]">Rented books</p>
                    <ul>
                        {userData.books.length >=0 
                        ? userData.books.map(item => {return(<li key={item} className="mb-[10px] ml-[30px] text-[20px] tracking-[2px] list-disc capitalize">{item}</li>)}) 
                        : <p> No books yet</p>}
                    </ul>
                </div>
                <div className="flex gap-[15px]">
                    <p>Card number</p>
                    <p className="text-[20px] text-[#BB945F]">F00234030</p>
                    <button className="flex items-center justify-center"><Image src={'/images/icon_copy.png'} width={13.5} height={12} alt="copy image"/></button>
                </div>
                <button onClick={()=>setUser(!user)} className="absolute right-[25px] top-[25px]"><svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 16.8507L17 2.00001" stroke="#0C0C0E" stroke-width="3"/>
                        <path d="M2 2.14928L17 17" stroke="#0C0C0E" stroke-width="3"/>
                        </svg>
                </button>
            </div>
        </div>
     );
}
 
export default UserPanel;