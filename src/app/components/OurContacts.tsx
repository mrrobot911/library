'use client'
import { FunctionComponent } from "react";
import Header_h2 from "./Header_h2";
import { YMaps, Map } from '@pbe/react-yandex-maps';

interface OurContactsProps {
}
 
const OurContacts: FunctionComponent<OurContactsProps> = () => {
    return (
        <section className="mx-[20px]">
            <Header_h2 letter="Our Contacts" id="3" />
            <div className="flex justify-between">
                <div className="text-[20px] leading-[40px] tracking-[2px]">
                    <h3 className="font-bold">For all Library inquiries:</h3>
                    <ul className="my-[40px]">
                        <li>Please call <a href="tel:(617) 730-2370">(617) 730-2370</a></li>
                        <li className="my-[20px]">For TTY service, please call <a href="tel:(617) 730-2370">(617) 730-2370</a></li>
                        <li>Putterham Library: <a href="tel:(617) 730-2385">(617) 730-2385</a></li>
                    </ul>
                    <p className="mb-[20px] font-bold">Senior Staff</p>
                    <p>Library Director: <a href="mailto:AmandaHirst@gmail.com"><b>Amanda Hirst</b></a></p>
                </div>
                <YMaps>
                    <div>
                        <Map width="696px" height="414px" defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
                    </div>
                </YMaps>
            </div>
        </section>
     );
}
 
export default OurContacts;