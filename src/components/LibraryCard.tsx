'use client'
import { useAppSelector } from "@/store/hooks";
import ProfileData from "./ProfileData";
import { useState } from "react";
import UserPanel from "./UserPanel";

const LibraryCard = () => {
    const user = useAppSelector((state) => state.user);
    const [show, setShow] = useState(false);
    const auth = user.auth;

    return (
        <div className="flex justify-between relative flex-col items-center md:flex-row md:items-start">
            <div className="flex flex-col max-w-[600px] items-center mb-[41px]">
                <h3 className="text-[30px] tracking-[0.6px] mb-[30px]">{auth ? "Your Library card" : "Find your Library card"}</h3>
                <form className="flex flex-col w-[100%] items-center box-border border-[3px] border-[#BB945F] p-[20px]">
                    <div className="pt-[20px] px-[20px] bg-[#BB945F] mb-[15px]">
                        <p className="text-[30px] mb-[20px] tracking-[0.6px] font-['Forum'] leading-[50px]">Brooklyn Public Library</p>
                        <input className="w-full mb-[25px] px-[20px] py-[8px] rounded-[10px] text-[30px] text-[#8E8E8E] leading-[50px] font-['Forum']" type="text" placeholder="Reader's name"/>
                        <input className="w-full mb-[25px] px-[20px] py-[8px] rounded-[10px] text-[30px] text-[#8E8E8E] leading-[50px] font-['Forum']" type="text" placeholder="Card number"/>
                    </div>
                    {auth 
                    ? <ProfileData booksize={user.books.length} fontsize={'10px'}/>
                    :<input type="submit" value="Check the card" className="font-bold text-[20px] my-[20px] px-[40px] py-[10px] border-[1px] font-['Inter'] border-black rounded-[2px] cursor-pointer" />}
                </form>
            </div>
            <div className="flex flex-col sm:items-center md:items-end">
                <h4 className="font-['Forum'] text-[30px] tracking-[0.6px] mb-[35px]">{auth ? "Visit your profile" : "Get a reader card"}</h4>
                <p className="w-[456px] font-['Inter'] text-[20px] tracking-[0.4px] mb-[35px] leading-[40px] text-end">{auth 
                ? "With a digital library card you get free access to the Library’s wide array of digital resources including e-books, databases, educational resources, and more."
                : "You will be able to see a reader card after logging into account or you can register a new account" 
                }</p>
                <div>
                    {auth 
                    ? <button className="w-[75px] py-[10px] box-border border-[1px] rounded-[2px] border-black font-bold font-['Inter'] text-[10px] leading-[10px] tracking-[1px] duration-200 hover:bg-[#BB945F] hover:border-[#BB945F]"
                    onClick={()=>setShow(!show)}
                    >Profile</button> 
                    : <div className="flex justify-end gap-[20px]"><button className="w-[75px] py-[10px] box-border border-[1px] font-bold leading-[10px] border-black rounded-[2px] font-['Inter'] text-[10px] tracking-[1px] duration-200 hover:bg-[#BB945F] hover:border-[#BB945F]">Sign Up</button>
                    <button className="w-[75px] py-[10px] box-border border-[1px] font-bold rounded-[2px] border-black leading-[10px] font-['Inter'] text-[10px] tracking-[1px] duration-200 hover:bg-[#BB945F] hover:border-[#BB945F]">Log in</button></div>}
                </div>
            </div>
            {show && auth && <UserPanel user={show} setUser={setShow}/>}
        </div>
     );
}
 
export default LibraryCard;