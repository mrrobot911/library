'use client'
import { useEffect, useState } from "react";

const Scroll = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 150) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        });
    }, []);

    return (
        <>
            {isVisible &&
            <a className="fixed bottom-[50px] right-[4%] cursor-pointer h-[70px] bg-white hover:bg-[#BB945F] rotate-90 rounded-[50%]" style={{display: isVisible ? 'block':'none'}} href="#">
                <svg width="70px" height="70px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path opacity="0.4" d="M13.2602 15.5302L9.74023 12.0002L13.2602 8.47021" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </a>
            }
        </>
    );
}

export default Scroll;