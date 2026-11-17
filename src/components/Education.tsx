import { useTranslation } from 'react-i18next';
import { FaGraduationCap } from 'react-icons/fa6';
import { formatDate } from '../utils/format-date';
import { TimelineEntry, TimelineSection } from './Timeline';

interface IEducationItem {
  title: string;
  institution: string;
  startDate: Date;
  endDate: Date | 'Present';
}

const EducationItem = ({ title, institution, startDate, endDate }: IEducationItem) => (
  <TimelineEntry period={`${formatDate(startDate)} - ${formatDate(endDate)}`}>
    <h3 className="font-bold text-[12px] leading-tight text-secondary">{title}</h3>
    <p className="text-[11px] text-gray-600">{institution}</p>
  </TimelineEntry>
);

const Education = () => {
  const { t } = useTranslation();

  return (
    <TimelineSection title={t('education.title')} icon={FaGraduationCap}>
      <EducationItem
        title={t('education.degrees.multiplatform')}
        institution="DigitechFP"
        startDate={new Date('2025-10-01')}
        endDate={new Date('2026-06-01')}
      />
      <EducationItem
        title={t('education.degrees.devops')}
        institution="UNIR"
        startDate={new Date('2025-03-01')}
        endDate={new Date('2025-10-01')}
      />
      <EducationItem
        title={t('education.degrees.web')}
        institution="Stucom"
        startDate={new Date('2020-09-01')}
        endDate={new Date('2022-06-01')}
      />
    </TimelineSection>
  );
};

export default Education;
