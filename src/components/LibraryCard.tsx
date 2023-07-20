interface card {
    auth: boolean
}
const LibraryCard = ({auth}:card) => {
    return (
        <div className="flex items-between justify-between">
            <div className="flex flex-col w-[600px] h-[453px] items-center">
                <h3 className="text-[30px] tracking-[0.6px] mb-[30px]">{auth ? "Your Library card" : "Find your Library card"}</h3>
                <form className="flex flex-col items-center box-border border-[3px] border-[#BB945F] p-[20px]">
                    <div className="pt-[20px] px-[20px] bg-[#BB945F]">
                        <p className="text-[30px] mb-[20px] tracking-[0.6px] font-['Forum'] leading-[50px]">Brooklyn Public Library</p>
                        <input className="w-[480px] h-[50px] mb-[25px] px-[20px] py-[8px] rounded-[10px] text-[30px] text-[#8E8E8E] leading-[50px] font-['Forum']" type="text" placeholder="Reader's name"/>
                        <input className="w-[480px] h-[50px] mb-[25px] px-[20px] py-[8px] rounded-[10px] text-[30px] text-[#8E8E8E] leading-[50px] font-['Forum']" type="text" placeholder="Card number"/>
                    </div>
                    {auth ? <div></div>:<input type="submit" value="Check the card" className="font-bold text-[20px] my-[20px] px-[40px] py-[10px] border-[1px] font-['Inter'] border-black rounded-[2px]" />}
                </form>
            </div>
            <div className="flex flex-col items-end">
                <h4 className="font-['Forum'] text-[30px] tracking-[0.6px] mb-[35px]">{auth ? "Visit your profile" : "Get a reader card"}</h4>
                <p className="w-[456px] font-['Inter'] text-[20px] tracking-[0.4px] mb-[35px] leading-[40px] text-end">{auth 
                ? "With a digital library card you get free access to the Library’s wide array of digital resources including e-books, databases, educational resources, and more."
                : "You will be able to see a reader card after logging into account or you can register a new account" 
                }</p>
                <div>
                    {auth 
                    ? <button className="w-[75px] py-[10px] box-border border-[2px] rounded-[2px] border-black font-bold font-['Inter'] text-[10px] tracking-[1px]">Profile</button> 
                    : <div className="flex justify-end gap-[20px]"><button className="w-[75px] py-[10px] box-border border-[2px] border-black rounded-[2px] font-['Inter'] text-[10px] tracking-[1px]">Sign Up</button>
                    <button className="w-[75px] py-[10px] box-border border-[2px] rounded-[2px] border-black font-['Inter'] text-[10px] tracking-[1px]">Log in</button></div>}
                </div>
            </div>
        </div>
     );
}
 
export default LibraryCard;