interface Header_h2Props {
    letter:string
}
 
function Header_h2 ({letter}: Header_h2Props){
    return (
        <>
            <h2 className="text-center my-[20px] font-['Forum'] text-[40px] tracking-[2px] capitalize">{letter}</h2>
            <hr className="h-[1px] w-[50px] mx-auto bg-black border-0 mb-[40px]"/>
        </>
     );
}
 
export default Header_h2;