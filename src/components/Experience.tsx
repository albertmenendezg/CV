import React from 'react';

interface IExperienceItem {
    role: string,
    company: string,
    startDate: string,
    endDate: string,
    city: string,
    description: string,
    tasks: string[],
    technologies: string[],
}
const ExperienceItem = (props: IExperienceItem) => {
    const { role, company, startDate, endDate, city, description, tasks, technologies } = props;
    return (
        <div>
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
            <h3 className="text-cyan-700 italic">Technologies</h3>
            <p>
                {
                    technologies.map((t, index) => (
                    <span key={t}>
                        {t}{index < technologies.length - 1 ? ', ' : ''}
                    </span>
                ))}
            </p>
        </div>
    );
}

const Experience = () => {
    return (
        <div className="pt-10 px-5">
            <h2 className="text-cyan-700 text-2xl font-bold underline">Experience</h2>
            <div className="flex flex-col space-y-4 mt-2">
                <ExperienceItem
                    role="Software Developer"
                    company="Feeder The Reaction SaaS"
                    startDate="10/2022"
                    endDate="04/2025"
                    city="Barcelona"
                    description="SaaS that provides an AI tool for marketing, audiovisuals and health applications to be able to analyze people emotions reactions"
                    tasks={[
                        "Development of API REST into microservices architecture with PHP Symfony and NodeJs with Express & NestJs, communicated with queues with RabbitMQ.",
                        "Development of client applications with React.js and Tailwind CSS.",
                        "Migration of api servers, including the upgrade of PHP from version 8 to 8.3 and Node.js version from 16 to 22.",
                        "Transformation of a monolith to microservices. Implementation of hexagonal architecture and DDD.",
                        "Configuration and management of relational databases (MySQL) and non-relational databases (MongoDB, Redis).",
                        "Implementation of unit tests and integration with PHP Unit and Jest.",
                        "Use of Docker for creating and managing development environments.",
                        "Version control management with Git.",
                        "CI/CD with bitbucket pipelines to deploy into AWS services",
                        "Manage AWS services including its configuration and observability",
                        "Use of Swagger/OpenAPI to document the API",
                        "Design and implementation of authentication and authorization mechanisms using JWT and OAuth2."
                    ]}
                    technologies={["Symfony", "PHP", "TypeScript", "JavaScript", "Node.js", "NestJs", "React.js", "Tailwind CSS", "RabbitMQ", "MySQL", "MongoDB", "Redis", "Docker", "Linux", "AWS", "HTML", "CSS", "Git"]}
                />
                <ExperienceItem
                    role="Fullstack Developer"
                    company="Foxize Cloud"
                    startDate="09/2021"
                    endDate="10/2022"
                    city="Barcelona"
                    description="E-learning SaaS"
                    tasks={[
                        "Maintenance and development of a web application using the Symfony framework",
                        "Implementation of SOLID principles to ensure clean and maintainable code",
                        "Development of frontend functionalities with HTML, CSS, and JavaScript with twig templates",
                        "Use of Docker for creating and managing development environments.",
                        "Management of relational databases (MySQL)",
                        "Version control management with Git."
                    ]}
                    technologies={["Symfony", "PHP", "JavaScript", "MySQL", "Docker", "Linux", "HTML", "CSS", "Bootstrap", "Git"]}
                />
            </div>
        </div>
    );
};

export default Experience;