import React from 'react';
import { useTranslation } from 'react-i18next';
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
    const { t } = useTranslation();
    const { role, company, startDate, endDate, tasks, techStack } = props;

    return (
        <div className="mb-2">
            <h3 className="font-bold text-base">{role}</h3>
            <div className="flex flex-row justify-between items-center mb-2">
                <p className="text-primary text-sm">{company}</p>
                <p className="text-primary text-xs">{formatDate(startDate)} - {formatDate(endDate)}</p>
            </div>
            <ul className="list-disc ml-4 mb-2">
                {tasks.map(task => (
                    <li key={task} className="text-sm text-primary mb-1">{task}</li>
                ))}
            </ul>
            <p className="text-primary text-xs font-semibold">{t('experience.techStack')}: {techStack.join(', ')}</p>
        </div>
    );
}

const Experience = () => {
    const { t } = useTranslation();
    
    return (
        <div>
            <h2 className="text-xl font-bold mb-1">{t('experience.title')}</h2>
            <div className="flex flex-col">
                <ExperienceItem
                    role={t('experience.roles.backendEngineer')}
                    company="Nter Tech Services"
                    startDate={new Date("2025-05-22")}
                    endDate="Present"
                    tasks={[
                        t('experience.tasks.nter1'),
                        t('experience.tasks.nter2'),
                        t('experience.tasks.nter3'),
                        t('experience.tasks.nter4'),
                    ]}
                    techStack={["Java", "SpringBoot", "RabbitMQ", "Docker", "Kubernetes", "MiniKube", "AWS", "Python", "Git", "GitLab"]}
                />
                <ExperienceItem
                    role={t('experience.roles.backendDeveloper')}
                    company="Feeder The Reaction SaaS"
                    startDate={new Date("2022-10-11")}
                    endDate={new Date("2025-04-01")}
                    tasks={[
                        t('experience.tasks.feeder1'),
                        t('experience.tasks.feeder2'),
                        t('experience.tasks.feeder3'),
                        t('experience.tasks.feeder4'),
                    ]}
                    techStack={["Spring Boot", "Java", "TypeScript", "Node.js", "NestJs", "Python", "RabbitMQ", "MySQL", "MongoDB", "Redis", "Docker", "Linux", "AWS", "Git", "BitBucket"]}
                />
                <ExperienceItem
                    role={t('experience.roles.fullstackDeveloper')}
                    company="Foxize Cloud"
                    startDate={new Date("2021-09-01")}
                    endDate={new Date("2022-10-10")}
                    tasks={[
                        t('experience.tasks.foxize1'),
                        t('experience.tasks.foxize2'),
                        t('experience.tasks.foxize3'),
                    ]}
                    techStack={["Symfony", "PHP", "Twig", "JavaScript", "MySQL", "Docker", "Linux", "HTML", "CSS", "Bootstrap", "Git", "GitLab"]}
                />
            </div>
        </div>
    );
};

export default Experience;
