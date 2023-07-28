'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import Header_h2 from "./Header_h2";
import CheckboxSlider from "./ChackboxSlider";

const About = () => {
    const [radio, setRadio] = useState<number>(1);
    const inputLink = [1,2,3];
    const imageLink = [
        "/images/image1.png",
        "/images/image2.png",
        "/images/image3.png",
        "/images/image4.png",
        "/images/image5.png",
    ]
    return ( 
        <section>
            <Header_h2 letter={"about"} id="0" />
            <p className="text-center mb-[20px]">The Brooklyn Library is a free workspace, a large number of books and a cozy coffee shop inside </p>
            <div className="flex mx-[20px] gap-[25px]">
                {imageLink.map((item, i) => <div key ={item} className={i === radio || i === radio - 1 || i === radio +1 ? "relative max-w-[450px] max-h-[560px] block duration-500" : "hidden"}><Image src={item} width={450} height={560} alt="library photo"/></div>)}
            </div>
            <CheckboxSlider radio={radio} setRadio={setRadio} inputLink={inputLink}/>
        </section>
     );
}
 
export default About;