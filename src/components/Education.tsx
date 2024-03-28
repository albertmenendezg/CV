import React from 'react';

interface IEducationItem {
    title: string;
    institution: string;
    startDate: string;
    endDate: string;
    city: string;
}
const EducationItem = (props: IEducationItem) => {
    const { title, institution, startDate, endDate, city} = props;
    return (
        <div>
            <h2 className="text-xl font-bold">{title}</h2>
            <h2 className="text-lg">{institution}</h2>
            <div className="flex flex-row justify-between text-sm text-cyan-700 italic">
                <p>{startDate} - {endDate}</p>
                <p>{city}</p>
            </div>
        </div>
    );
}

const Education = () => {
    return (
        <div className="pt-5 px-5">
            <h2 className="text-cyan-700 text-2xl font-bold underline">Education</h2>
            <div className="flex flex-col pt-2">
                <EducationItem
                    title="Web Application Development"
                    institution="Stucom"
                    city="Barcelona"
                    startDate="09/2020"
                    endDate="06/2022"
                />
                <EducationItem
                    title="Network Computer Systems Administration"
                    institution="LinkiaFP"
                    city="Barcelona"
                    startDate="02/2024"
                    endDate="Present"
                />
            </div>
        </div>
    );
};

export default Education;