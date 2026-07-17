import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from "./components/Header";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Languages from "./components/Languages";
import { IoMdMail, IoMdPhonePortrait } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const App = () => {
    const { t } = useTranslation();
    
    return (
        <main className="min-h-screen w-full flex">
            <aside className="w-1/3 bg-secondary text-white p-4">
                <div className="flex justify-center mb-4">
                    <img src="profile_photo.jpg" alt="Albert Menéndez González" width="110" height="auto" className="rounded-full border-4 border-white" />
                </div>
                
                <div className="mb-4">
                    <h3 className="text-lg font-bold mb-3 uppercase tracking-wider">{t('contact.title')}</h3>
                    <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-3">
                            <IoMdMail className="text-gray-300"/>
                            <a href="mailto:albertmenendezg@gmail.com" className="hover:text-gray-300">albertmenendezg@gmail.com</a>
                        </div>
                        <div className="flex items-center space-x-3">
                            <IoMdPhonePortrait className="text-gray-300"/>
                            <a href="tel:+34678630197" className="hover:text-gray-300">(+34) 678630197</a>
                        </div>
                        <div className="flex items-center space-x-3">
                            <FaLocationDot className="text-gray-300"/>
                            <p>{t('contact.location')}</p>
                        </div>
                    </div>
                </div>

                <hr className="border-gray-600 my-4" />
                
                <Languages />
                
                <hr className="border-gray-600 my-4" />
                
                <Skills />
            </aside>
            
            <div className="w-2/3 bg-gray-50">
                <div className="px-2 pt-1">
                    <Header />
                </div>
                <hr className="border-gray-300" />
                <div className="px-2 pt-1">
                    <Experience />
                </div>
                <hr className="border-gray-300" />
                <div className="px-2 pt-1">
                    <Education />
                </div>
            </div>
        </main>
    );
};

export default App;