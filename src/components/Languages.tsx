import React from 'react';

interface ILanguageItem {
    name: string;
    level: string
}
const LanguageItem = (props: ILanguageItem) => {
    const { name, level } = props;
    return (
        <div className="flex justify-between items-center">
            <h2 className="font-semibold text-sm">{name}</h2>
            <h2 className="text-sm text-gray-300">{level}</h2>
        </div>
    );
}
const Languages = () => {
    return (
        <div>
            <h3 className="text-lg font-bold mb-3 uppercase tracking-wider">Languages</h3>
            <div className="flex flex-col space-y-2">
                <LanguageItem name="Spanish" level="Native" />
                <LanguageItem name="Catalan" level="Native" />
                <LanguageItem name="English" level="B2 - Professional" />
            </div>
        </div>
    );
};

export default Languages;