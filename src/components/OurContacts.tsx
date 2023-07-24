'use client'
import Header_h2 from "./Header_h2";

const OurContacts = () => {
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
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A3537f9a3df4b114de504b143230a851384b02fe417e85432e1a96f28b6c9e1a2&amp;source=constructor" width="696" height="414"></iframe>
            </div>
        </section>
     );
}
 
export default OurContacts;