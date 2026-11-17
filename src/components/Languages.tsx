import { useTranslation } from 'react-i18next';
import SidebarSection from './SidebarSection';

const LanguageItem = ({ name, level }: { name: string; level: string }) => (
  <div className="flex justify-between items-center text-[11px]">
    <span className="font-semibold text-white">{name}</span>
    <span className="text-gray-200">{level}</span>
  </div>
);

const Languages = () => {
  const { t } = useTranslation();

  return (
    <SidebarSection title={t('languages.title')}>
      <div className="space-y-1">
        <LanguageItem name={t('languages.spanish')} level={t('languages.native')} />
        <LanguageItem name={t('languages.catalan')} level={t('languages.native')} />
        <LanguageItem name={t('languages.english')} level={t('languages.professional')} />
      </div>
    </SidebarSection>
  );
};

export default Languages;
