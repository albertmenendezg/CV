import React from 'react';

interface ILanguageItem {
    name: string;
    level: string
}
const LanguageItem = (props: ILanguageItem) => {
    const { name, level } = props;
    return (
        <div>
            <h2 className="text-lg font-semibold">{name}</h2>
            <h2 className="italic text-md text-cyan-700">{level}</h2>
        </div>
    );
}
const Languages = () => {
    return (
        <div className="pt-5 px-5">
            <h2 className="text-cyan-700 text-2xl font-bold underline">Languages</h2>
            <div className="flex flex-row flex-wrap pt-2">
                <div className="w-1/2">
                    <LanguageItem name="Spanish" level="Native or Bilingual" />
                </div>
                <div className="w-1/2">
                    <LanguageItem name="English" level="B2 intermediate" />
                </div>
                <div className="w-1/2">
                    <LanguageItem name="Catalan" level="Native or Bilingual" />
                </div>
            </div>
        </div>
    );
};

export default Languages;