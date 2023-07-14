import { FunctionComponent } from "react";
import Header_h2 from "./Header_h2";

interface OurContactsProps {
    
}
 
const OurContacts: FunctionComponent<OurContactsProps> = () => {
    return (
        <section>
            <Header_h2 letter="Our Contacts" />
            <div className="flex flex-col">
                <div className="text-[20px] leading-[40px] tracking-[2px]">
                    <h3 className="font-bold">For all Library inquiries:</h3>
                    <ul className="my-[40px]">
                        <li>Please call (617) 730-2370</li>
                        <li className="my-[20px]">For TTY service, please call (617) 730-2370</li>
                        <li>Putterham Library: (617) 730-2385</li>
                    </ul>
                    <p className="mb-[20px] font-bold">Senior Staff</p>
                    <p>Library Director: <b>Amanda Hirst</b></p>
                </div>
                <div>

                </div>
            </div>
        </section>
     );
}
 
export default OurContacts;