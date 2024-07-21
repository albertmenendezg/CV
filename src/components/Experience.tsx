import React from 'react';

interface IExperienceItem {
    role: string,
    company: string,
    startDate: string,
    endDate: string,
    city: string,
    description: string,
    tasks: string[]
}
const ExperienceItem = (props: IExperienceItem) => {
    const { role, company, startDate, endDate, city, description, tasks } = props;
    return (
        <div className="">
            <h2 className="font-bold text-lg">{role}</h2>
            <p className="text-lg">{company}</p>
            <div className="flex flex-row justify-between text-sm text-cyan-700 italic">
                <p>{startDate} - {endDate}</p>
                <p>{city}</p>
            </div>
            <p className="text-sm italic text-gray-400">{description}</p>
            <h3 className="text-cyan-700 italic">Achievements/Tasks</h3>
            <ul className="list-disc">
                {tasks.map(task => (
                    <li key={task} className="flex flex-row justify-between text-sm">- {task}</li>
                ))}
            </ul>
        </div>
    );
}

const Experience = () => {
    return (
        <div className="pt-10 px-5">
            <h2 className="text-cyan-700 text-2xl font-bold underline">Work Experience</h2>
            <div className="flex flex-col space-y-4 mt-2">
                <ExperienceItem
                    role="Fullstack Developer"
                    company="Foxize"
                    startDate="09/2021"
                    endDate="10/2022"
                    city="Barcelona"
                    description="SaaS that provides a tool to be able to teach your employees with courses"
                    tasks={["Fix and develop new features using Symfony framework"]}
                />
                <ExperienceItem
                    role="Software Developer"
                    company="Feeder The Reaction SaaS"
                    startDate="10/2022"
                    endDate="Present"
                    city="Barcelona"
                    description="SaaS that provides a tool for marketing and audiovisuals to be able to analyze people emotions reactions"
                    tasks={["Fix and develop new features using multiple microservices in Php Symfony and Nest Js Typescript frameworks", "Render the content in the client side using ReactJS framework with tailwindcss"]}
                />
            </div>
        </div>
    );
};

export default Experience;