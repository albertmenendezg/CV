import React from 'react';
import Header from "./components/Header";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Languages from "./components/Languages";
import Certifications from "./components/Certifications";

const App = () => {
    return (
        <main className="min-h-screen flex flex-col w-full">
            <Header />
            <div className="flex flex-col space-y-2">
                <div className="w-100 px-5">
                    <Education />
                </div>
                <div className="w-100 px-5">
                    <Experience />
                </div>
                <div className="flex flex-row px-5 space-y-2">
                    <div className="w-2/5">
                        <Skills />
                    </div>
                    <div className="w-3/5 flex flex-col">
                        <Languages />
                        { /* <Certifications /> */ }
                    </div>
                </div>
            </div>
        </main>
    );
};

export default App;