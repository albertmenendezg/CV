import React from 'react';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t } = useTranslation();
    
    return (
        <header className="mb-1">
            <div>
                <h1 className="text-2xl font-bold mb-0.5 leading-tight">{t('header.title')}</h1>
                <h2 className="text-sm text-primary mb-0.5">{t('header.subtitle')}</h2>
                <p className="text-primary text-xs leading-snug">{t('header.description')}</p>
            </div>
        </header>
    );
};

export default Header;