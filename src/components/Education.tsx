import React from 'react';
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
        <div className="mb-3">
            <h3 className="font-bold text-base">{title}</h3>
            <div className="flex flex-row justify-between items-center">
                <h2 className="text-gray-700 text-sm">{institution}</h2>
                <div className="text-primary text-xs">
                    <p>{formatDate(startDate)} - {formatDate(endDate)}</p>
                </div>
            </div>
        </div>
    );
}

const Education = () => {
    return (
        <div>
            <h2 className="text-xl font-bold pt-4 mb-4">Education</h2>
            <div className="flex flex-col">
                <EducationItem
                    title="Multiplatform Application Development"
                    institution="DigitechFp"
                    startDate={new Date("2025-10-01")}
                    endDate={new Date("2026-06-01")}
                />
                <EducationItem
                    title="Devops & Cloud Program"
                    institution="UNIR"
                    startDate={new Date("2025-03-01")}
                    endDate={new Date("2025-10-01")}
                />
                <EducationItem
                    title="Web Application Development"
                    institution="Stucom"
                    startDate={new Date("2020-09-01")}
                    endDate={new Date("2022-06-01")}
                />
            </div>
        </div>
    );
};

export default Education;
