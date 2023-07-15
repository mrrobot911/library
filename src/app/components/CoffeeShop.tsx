import Header_h2 from "./Header_h2";
import price_db from "../database/price.json"
import Price from "./Price";

const priceLinks = Object.keys(price_db);

const CoffeeShop = () => {
    return ( 
        <section>
            <Header_h2 letter={"Coffee shop"} id="2" />
            <p className="mx-[20px] my-[40px] text-[20px] tracking-[2px] leading-[40px] text-center">In our library, we have of cozy coffee shop, welcoming in customers with frothy cappuccinos and friendly conversation. 
you can get a favorite book and read in coffee shop. Our barista to cook you best coffee, and also you can try desserts from bakery.</p>
            <div className="flex font-['Forum'] text-[#BB945F] mx-[20px] justify-between text-[40px] leading-[40px] tracking-[2px]">
                {priceLinks.map(item => <Price key={item} data={price_db[item]} item={item} alighn={priceLinks[0]===item}/>)}
            </div>
        </section>
     );
}
 
export default CoffeeShop;