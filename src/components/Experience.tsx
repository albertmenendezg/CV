import React from 'react';

interface IExperienceItem {
    role: string,
    company: string,
    startDate: Date,
    endDate: Date|"Present",
    city: string,
    description: string,
    tasks: string[],
    techStack: string[],
}
const ExperienceItem = (props: IExperienceItem) => {
    const { role, company, startDate, endDate, city, description, tasks, techStack } = props;

    const formatedDate = (date: Date | "Present") => {
        if (date === "Present") return "Present";

        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        return monthNames[date.getUTCMonth()] + ' ' + date.getUTCFullYear();
    }

    return (
        <div>
            <h2 className="font-bold text-lg">{role}</h2>
            <p className="text-lg">{company}</p>
            <div className="flex flex-row justify-between text-sm text-cyan-700 italic">
                <p>{formatedDate(startDate)} - {formatedDate(endDate)}</p>
                <p>{city}</p>
            </div>
            <p className="text-sm italic text-gray-400">{description}</p>
            <h3 className="text-cyan-700 italic">Achievements/Tasks</h3>
            <ul className="list-disc">
                {tasks.map(task => (
                    <li key={task} className="flex flex-row justify-between text-sm">- {task}</li>
                ))}
            </ul>
            <h3 className="text-cyan-700 italic">Tech Stack</h3>
            <p>
                {
                    techStack.map((t, index) => (
                    <span key={t}>
                        {t}{index < techStack.length - 1 ? ', ' : ''}
                    </span>
                ))}
            </p>
        </div>
    );
}

const Experience = () => {
    return (
        <div>
            <h2 className="text-cyan-700 text-2xl font-bold underline">Experience</h2>
            <div className="flex flex-col space-y-4 mt-2 gap-4">
                <ExperienceItem
                    role="Backend Engineer"
                    company="Nter Tech Services"
                    startDate={new Date("2025-08-25")}
                    endDate="Present"
                    city="Remotely"
                    description="Nter Tech Services is a global technology consulting company. I am part of an internal team building a scalable application to automate the correction of code submissions for internal employee training, saving examiners time by automatically validating code against test cases."
                    tasks={[
                        "Develop backend services and microservices using Java Spring Boot framework",
                        "Setup and define RabbitMQ queues and listeners to communicate microservices.",
                        "Research and implement solutions to orchestrate parameterizable containers, including Docker image builds and Git repository downloads.",
                        "Use of Swagger/OpenAPI to document the API",
                        "Define and manage Kubernetes resources to deploy and scale the application infrastructure.",
                        "Integrate with CI/CD pipelines in GitLab",
                        "Implement the infrastructure with AWS services such as EKS, ECR, Fargate, AmazonMQ"
                    ]}
                    techStack={["Java", "SpringBoot", "RabbitMQ", "Docker", "Kubernetes", "MiniKube", "AWS", "Python", "Git", "GitLab"]}
                />
                <ExperienceItem
                    role="Backend Developer"
                    company="Capgemini"
                    startDate={new Date("2025-05-22")}
                    endDate={new Date("2025-08-01")}
                    city="Remotely"
                    description="Capgemini is a global technology consulting company. I worked as part of the Backend PHP team developing solutions for the Spanish government client SGAD, focused on electronic budgeting and notification services."
                    tasks={[
                        "Developed REST APIs within a monolithic application using the Symfony framework.",
                        "Applied Domain-Driven Design (DDD) and Hexagonal Architecture principles.",
                        "Fixed and debugged user-reported issues to improve system stability.",
                        "Integrated external web services using SOAP and REST calls.",
                        "Migrated large datasets from an outdated database engine to new schema structures.",
                        "Ensured code quality through unit and acceptance testing using PhpUnit and Behat as testing frameworks.",
                        "Use of Swagger/OpenAPI to document the API",
                        "Participate in daily stand-up meetings to discuss progress, blockers, and next steps.",
                        "Track tasks and manage workflows using Jira."
                    ]}
                    techStack={["Php", "Symfony", "Doctrine", "Twig", "Oracle", "REST", "SOAP", "ActiveMQ", "SQL", "Git", "GitLab"]}
                />
                <ExperienceItem
                    role="Backend Developer"
                    company="Feeder The Reaction SaaS"
                    startDate={new Date("2022-10-11")}
                    endDate={new Date("2025-04-01")}
                    city="Barcelona - Hybrid"
                    description="SaaS that provides an AI tool for marketing, audiovisuals and health applications to be able to analyze people emotions reactions"
                    tasks={[
                        "Development of API REST into microservices architecture with Java Spring Boot and NodeJs with Express & NestJs, communicated with queues with RabbitMQ.",
                        "Development of client applications with React.js and Tailwind CSS.",
                        "Transformation of a monolith to microservices. Implementation of hexagonal architecture and DDD.",
                        "Configuration and management of relational databases (MySQL) and non-relational databases (MongoDB, Redis).",
                        "Implementation of unit tests and integration with Junit and Jest.",
                        "Use of Docker for creating and managing development environments.",
                        "Version control management with Git.",
                        "CI/CD with bitbucket pipelines to deploy into AWS services",
                        "Manage AWS services including its configuration and observability",
                        "Use of Swagger/OpenAPI to document the API",
                        "Track tasks and manage workflows using Trello."
                    ]}
                    techStack={["Spring Boot", "Java", "TypeScript", "Node.js", "NestJs", "React.js", "Tailwind CSS", "RabbitMQ", "MySQL", "MongoDB", "Redis", "Docker", "Linux", "AWS", "HTML", "CSS", "Git", "BitBucket"]}
                />
                <ExperienceItem
                    role="Fullstack Developer"
                    company="Foxize Cloud"
                    startDate={new Date("2021-09-01")}
                    endDate={new Date("2022-10-10")}
                    city="Barcelona - Hybrid"
                    description="Foxize Cloud is a SaaS company providing an e-learning platform for internal employee training"
                    tasks={[
                        "Maintenance and development of a web application using the Symfony framework",
                        "Implementation of SOLID principles to ensure clean and maintainable code",
                        "Development of frontend functionalities with HTML, CSS, and JavaScript with twig templates",
                        "Use of Docker for creating and managing development environments.",
                        "Management of relational databases (MySQL)",
                        "Version control management with Git.",
                        "Participate in daily stand-up meetings to discuss progress, blockers, and next steps.",
                        "Track tasks and manage workflows using Jira."
                    ]}
                    techStack={["Symfony", "PHP", "JavaScript", "MySQL", "Docker", "Linux", "HTML", "CSS", "Bootstrap", "Git", "GitLab"]}
                />
            </div>
        </div>
    );
};

export default Experience;