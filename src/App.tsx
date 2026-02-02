import React from 'react';
import Header from "./components/Header";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Languages from "./components/Languages";

const App = () => {
    return (
        <main className="min-h-screen w-full">
            <Header />
            <div className="grid grid-cols-2 space-x-2 p-2">
                <div>
                    <Experience />
                </div>
                <div>
                    <Education />
                    <Languages />
                    <Skills />
                </div>
            </div>
        </main>
    );
};

export default App;