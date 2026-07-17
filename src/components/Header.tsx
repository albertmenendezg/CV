import React from 'react';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t } = useTranslation();
    
    return (
        <header className="mb-2">
            <div>
                <h1 className="text-3xl font-bold mb-1">{t('header.title')}</h1>
                <h2 className="text-lg text-primary mb-1">{t('header.subtitle')}</h2>
                <p className="text-primary text-sm">{t('header.description')}</p>
            </div>
        </header>
    );
};

export default Header;