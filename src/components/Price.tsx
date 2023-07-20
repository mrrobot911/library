interface PriceProps {
    data: (string | number)[][]
    item: string
    alighn: boolean
}
function Price({ data, item, alighn}:PriceProps){
    return (
        <div className={alighn ?"flex flex-col items-start":"flex flex-col items-end"}>
            <h3 className="mb-[40px]">{item}</h3>
            {data.map(pre => {return(
                <div key={pre[0]} className={"flex font-['Inter'] text-[20px] mb-[40px] gap-[60px] text-black items-center"}>
                    <p className={alighn ?"capitalize w-[211px]":"capitalize"}>{pre[0]}</p>
                    <hr className="w-[90px] h-[1px] bg-[#BB945F] border-0"/>
                    <p>${pre[1]}</p>
                </div>
            )})}
    </div>
     );
}
 
export default Price;