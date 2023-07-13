import Image from "next/image"
import { FunctionComponent } from "react";

interface Props {
    
}
 
const Welcome: FunctionComponent<Props> = () => {
    return ( 
        <section className="container relative h-[600px] max-w-[1440px]">
            <div className="absolute inset-0 h-[600px]">
                <Image
                    src="/images/biblio.jpeg"
                    alt="background image"
                    fill
                    objectFit="cover"
                />
            <div className="relative z-8 flex items-center px-5 bg-gradient-to-b from-[#0c0c0efd] to-[rgba(18,18,21,0.1)] justify-between h-[300px]"></div>
                <div className="absolute top-[220px] z-10 w-[600px] h-[220px] px-[40px] bg-[#0C0C0E] flex justify-center text-center flex-shrink-0">
                    <h2 className="my-auto text-[40px] font-['Forum'] text-white tracking-[3px] uppercase">Welcome <br/> to the Brooklyn Library</h2>
                </div>
            </div>
        </section>
     );
}

export default Welcome;