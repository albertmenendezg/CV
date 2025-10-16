import React from 'react';
import { IoMdMail, IoMdPhonePortrait } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const Header = () => {
    return (
        <header>
            <div className="flex flex-row bg-gray-800 text-white p-10">
                <div className="w-2/3">
                    <h1 className="text-xl font-semibold">Albert Menéndez González</h1>
                    <h2 className="text-md text-cyan-700">Backend & Cloud Engineer</h2>
                    <h2 className="text-md">Technology enthusiast learning new technologies every day to implement them</h2>
                </div>
                <div className="w-1/2 flex justify-end">
                    <img src="profile_photo.jpg" alt="Albert Menéndez González" width="150" height="auto" className="rounded-full" />
                </div>
            </div>
            <div className="bg-gray-700 text-white flex items-center justify-center space-x-12 py-2">
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
                    <p>El Masnou, Barcelona (Spain)</p>
                </div>
            </div>
        </header>
    );
};

export default Header;