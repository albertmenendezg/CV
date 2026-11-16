import React from 'react';
import { useTranslation } from 'react-i18next';

interface ILanguageItem {
    name: string;
    level: string
}
const LanguageItem = (props: ILanguageItem) => {
    const { name, level } = props;
    return (
        <div className="flex justify-between items-center">
            <h2 className="font-semibold text-xs">{name}</h2>
            <h2 className="text-[11px] text-gray-300">{level}</h2>
        </div>
    );
}
const Languages = () => {
    const { t } = useTranslation();
    
    return (
        <div>
            <h3 className="text-sm font-bold mb-2 uppercase tracking-wider">{t('languages.title')}</h3>
            <div className="flex flex-col space-y-1">
                <LanguageItem name={t('languages.spanish')} level={t('languages.native')} />
                <LanguageItem name={t('languages.catalan')} level={t('languages.native')} />
                <LanguageItem name={t('languages.english')} level={t('languages.professional')} />
            </div>
        </div>
    );
};

export default Languages;