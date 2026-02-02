import React from 'react';
import {formatDate} from "../utils/format-date";

interface IExperienceItem {
    role: string,
    company: string,
    startDate: Date,
    endDate: Date|"Present",
    tasks: string[],
    techStack: string[],
}
const ExperienceItem = (props: IExperienceItem) => {
    const { role, company, startDate, endDate, tasks, techStack } = props;

    return (
        <div>
            <h2 className="font-bold text-lg">{role}</h2>
            <div className="flex flex-row justify-between items-center">
                <p className="text-lg">{company}</p>
                <p className="text-cyan-700">{formatDate(startDate)} - {formatDate(endDate)}</p>
            </div>
            <ul className="list-disc">
                {tasks.map(task => (
                    <li key={task} className="flex flex-row justify-between text-sm">- {task}</li>
                ))}
            </ul>
            <h3 className="text-cyan-700">Tech Stack</h3>
            <p>
                {
                    techStack.map((t, index) => (
                        <span key={t}>
                            {t}{index < techStack.length - 1 ? ', ' : ''}
                        </span>
                    ))
                }
            </p>
        </div>
    );
}

const Experience = () => {
    return (
        <div>
            <h2 className="text-cyan-700 text-2xl font-bold underline">Experience</h2>
            <div className="flex flex-col space-y-2">
                <ExperienceItem
                    role="Backend Engineer"
                    company="Nter Tech Services"
                    startDate={new Date("2025-05-22")}
                    endDate="Present"
                    tasks={[
                        "Designed and developed a scalable system to automatically validate code submissions, reducing manual correction time.",
                        "Built backend microservices using Java Spring Boot with asynchronous communication via RabbitMQ.",
                        "Orchestration of containerized applications using Docker and Kubernetes",
                        "Integrated CI/CD pipelines (GitLab) and automated infrastructure on AWS.",
                    ]}
                    techStack={["Java", "SpringBoot", "RabbitMQ", "Docker", "Kubernetes", "MiniKube", "AWS", "Python", "Git", "GitLab"]}
                />
                <ExperienceItem
                    role="Backend Developer"
                    company="Feeder The Reaction SaaS"
                    startDate={new Date("2022-10-11")}
                    endDate={new Date("2025-04-01")}
                    tasks={[
                        "Developed and maintained REST APIs in a microservices architecture using Spring Boot and NestJs communicated with RabbitMQ.",
                        "Migration from monolith to microservices, applying Hexagonal Architecture and DDD.",
                        "Designed and managed relational and non-relational databases (MySQL, PostgresSql, MongoDb, Redis).",
                        "Implemented CI/CD pipelines and deployed cloud infrastructure on AWS."
                    ]}
                    techStack={["Spring Boot", "Java", "TypeScript", "Node.js", "NestJs", "RabbitMQ", "MySQL", "MongoDB", "Redis", "Docker", "Linux", "AWS", "Git", "BitBucket"]}
                />
                <ExperienceItem
                    role="Fullstack Developer"
                    company="Foxize Cloud"
                    startDate={new Date("2021-09-01")}
                    endDate={new Date("2022-10-10")}
                    tasks={[
                        "Developed and maintained a SaaS e-learning platform using Symfony (PHP).",
                        "Applied SOLID principles and improved code maintainability.",
                        "Development of frontend functionalities with HTML, CSS, and JavaScript with twig templates",
                    ]}
                    techStack={["Symfony", "PHP", "Twig", "JavaScript", "MySQL", "Docker", "Linux", "HTML", "CSS", "Bootstrap", "Git", "GitLab"]}
                />
            </div>
        </div>
    );
};

export default Experience;