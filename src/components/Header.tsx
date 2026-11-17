import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="mb-3">
      <h1 className="text-[25px] font-semibold uppercase tracking-[0.14em] whitespace-nowrap leading-tight text-secondary">
        {t('header.title')}
      </h1>
      <h2 className="text-[13px] font-medium text-gray-600 mt-0.5 mb-2">{t('header.subtitle')}</h2>
      <p className="text-[10.5px] text-primary leading-snug text-justify">{t('summary.text')}</p>
    </header>
  );
};

export default Header;
