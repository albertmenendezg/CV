import React from 'react';

interface ILanguageItem {
    name: string;
    level: string
}
const LanguageItem = (props: ILanguageItem) => {
    const { name, level } = props;
    return (
        <div className="flex flex-row space-x-2 items-center text-lg">
            <h2 className="font-semibold">{name}: </h2>
            <h2 className="text-cyan-700">{level}</h2>
        </div>
    );
}
const Languages = () => {
    return (
        <div>
            <h2 className="text-cyan-700 text-2xl font-bold underline">Languages</h2>
            <div className="flex flex-col flex-wrap pt-2">
                <LanguageItem name="Spanish" level="Native" />
                <LanguageItem name="Catalan" level="Native" />
                <LanguageItem name="English" level="B2" />
            </div>
        </div>
    );
};

export default Languages;