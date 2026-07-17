import React from 'react';
import { useTranslation } from 'react-i18next';
import {formatDate} from "../utils/format-date";

interface IEducationItem {
    title: string;
    institution: string;
    startDate: Date;
    endDate: Date|"Present";
}
const EducationItem = (props: IEducationItem) => {
    const { title, institution, startDate, endDate } = props;

    return (
        <div className="mb-2">
            <h3 className="font-bold text-base">{title}</h3>
            <div className="flex flex-row justify-between items-center">
                <h2 className="text-primary text-sm">{institution}</h2>
                <div className="text-primary text-xs">
                    <p>{formatDate(startDate)} - {formatDate(endDate)}</p>
                </div>
            </div>
        </div>
    );
}

const Education = () => {
    const { t } = useTranslation();
    
    return (
        <div>
            <h2 className="text-xl font-bold mb-1">{t('education.title')}</h2>
            <div className="flex flex-col">
                <EducationItem
                    title={t('education.degrees.multiplatform')}
                    institution="DigitechFp"
                    startDate={new Date("2025-10-01")}
                    endDate={new Date("2026-06-01")}
                />
                <EducationItem
                    title={t('education.degrees.devops')}
                    institution="UNIR"
                    startDate={new Date("2025-03-01")}
                    endDate={new Date("2025-10-01")}
                />
                <EducationItem
                    title={t('education.degrees.web')}
                    institution="Stucom"
                    startDate={new Date("2020-09-01")}
                    endDate={new Date("2022-06-01")}
                />
            </div>
        </div>
    );
};

export default Education;
