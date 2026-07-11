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
        <div>
            <h2 className="text-xl font-bold">{title}</h2>
            <div className="flex flex-row justify-between items-center">
                <h2 className="text-lg">{institution}</h2>
                <div className="flex flex-row justify-between text-cyan-700">
                    <p>{formatDate(startDate)} - {formatDate(endDate)}</p>
                </div>
            </div>
        </div>
    );
}

const Education = () => {
    return (
        <div>
            <h2 className="text-cyan-700 text-2xl font-bold underline">Education</h2>
            <div className="flex flex-col pt-2 space-y-2">
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