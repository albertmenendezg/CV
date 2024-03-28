import React from 'react';
import Header from "./components/Header";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Languages from "./components/Languages";

const App = () => {
    return (
        <main className="h-screen flex flex-col w-full h-full">
            <Header />
            <div className="flex flex-row flex-wrap">
                <div className="w-1/2">
                    <Experience/>
                    <Education />
                </div>
                <div className="w-1/2">
                    <Skills/>
                    <Languages />
                </div>
            </div>
        </main>
    );
};

export default App;