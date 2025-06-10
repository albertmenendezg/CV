import React from 'react';
import Header from "./components/Header";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Languages from "./components/Languages";

const App = () => {
    return (
        <main className="h-screen flex flex-col w-full">
            <Header />
            <div className="flex flex-row flex-wrap">
                <Experience/>
                <Education />
                <Skills/>
                <Languages />
            </div>
        </main>
    );
};

export default App;