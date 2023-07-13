import Image from "next/image";
import { FunctionComponent } from "react";
import Checkbox from "../scripts/Chackbox";

interface AboutProps {
}
const About: FunctionComponent<AboutProps> = () => {

    const imageLink = [
        "/images/image1.png",
        "/images/image2.png",
        "/images/image3.png",
        "/images/image4.png",
        "/images/image5.png",
    ]
    return ( 
        <section>
            <h2 className="text-center my-[20px] font-['Forum'] text-[40px] tracking-[2px]">About</h2>
            <hr className="h-[1px] w-[50px] mx-auto bg-black border-0"/>
            <p className="text-center mt-[40px] mb-[20px] capitalize">The Brooklyn Library is a free workspace, a large number of books and a cozy coffee shop inside </p>
            <div className="flex mx-[20px] gap-[25px]">
                {imageLink.map(item => <Image key ={item} src={item} width={450} height={560} alt="library photo"/>)}
            </div>
            <Checkbox />
        </section>
     );
}
 
export default About;