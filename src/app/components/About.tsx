'use client'
import Image from "next/image";
import { FunctionComponent, useState } from "react";
import Header_h2 from "./Header_h2";
import CheckboxSlider from "./ChackboxSlider";

interface AboutProps {
}
const About: FunctionComponent<AboutProps> = () => {
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
            <Header_h2 letter={"about"} />
            <p className="text-center mb-[20px]">The Brooklyn Library is a free workspace, a large number of books and a cozy coffee shop inside </p>
            <div className="flex mx-[20px] gap-[25px]">
                {imageLink.slice(radio-1,radio+2).map(item => <Image key ={item} src={item} width={450} height={560} alt="library photo"/>)}
            </div>
            <CheckboxSlider radio={radio} setRadio={setRadio} inputLink={inputLink}/>
        </section>
     );
}
 
export default About;