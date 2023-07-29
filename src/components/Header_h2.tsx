interface Header_h2Props {
    letter:string
    id:string
}
 
function Header_h2 ({letter,id}: Header_h2Props){
    return (
        <>
            <h2 id={id} className="text-center my-[20px] font-forum text-[40px] tracking-[2px] capitalize">{letter}</h2>
            <hr className="h-[1px] w-[50px] mx-auto bg-black border-0 mb-[40px]"/>
        </>
     );
}
 
export default Header_h2;