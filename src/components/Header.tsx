import React from 'react';
import { IoMdMail, IoMdPhonePortrait } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const Header = () => {
    return (
        <header>
            <div className="flex flex-row bg-gray-800 text-white p-2.5">
                <div className="w-2/3 flex flex-row justify-between">
                    <div>
                        <h1 className="text-xl font-bold">Albert Menéndez González</h1>
                        <h2 className="text-md">Senior Backend and Cloud Engineer</h2>
                        <p className="text-sm font-gray-300">Focused on building reliable, secure and scalable and product-fit solutions</p>
                    </div>
                    <div>
                        <div className="flex items-center space-x-2">
                            <IoMdMail/>
                            <a href="mailto:albertmenendezg@gmail.com">albertmenendezg@gmail.com</a>
                        </div>
                        <div className="flex items-center space-x-2">
                            <IoMdPhonePortrait/>
                            <a href="tel:+34678630197">(+34) 678630197</a>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaLocationDot/>
                            <p>Barcelona, Spain</p>
                        </div>
                    </div>
                </div>
                <div className="w-1/3 flex justify-center">
                    <img src="profile_photo.jpg" alt="Albert Menéndez González" width="100" height="auto" className="rounded-full" />
                </div>
            </div>
        </header>
    );
};

export default Header;