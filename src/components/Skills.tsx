import { useTranslation } from 'react-i18next';

interface ISkillCategory {
    categoryKey: string;
    skills: string[];
}

const skillCategories: ISkillCategory[] = [
    { categoryKey: "skills.categories.backend", skills: ["Java", "SpringBoot", "Typescript", "NodeJS", "NestJs", "Python", "Go", "Php"] },
    { categoryKey: "skills.categories.devops", skills: ["Docker", "Kubernetes", "AWS", "Linux", "Terraform", "GitHub Actions", "GitLab CI"] },
    { categoryKey: "skills.categories.ai", skills: ["Prompt", "Agents", "MCPs", "Skills", "Codex", "Claude", "OpenCode"] },
    { categoryKey: "skills.categories.frontend", skills: ["ReactJS", "NextJS", "TailwindCSS"] },
    { categoryKey: "skills.categories.architecture", skills: ["Domain Driven Design", "Hexagonal Architecture", "Microservices", "Event Driven Architecture"] },
    { categoryKey: "skills.categories.databases", skills: ["SQL", "MySQL", "PostgresSql", "MongoDB", "Redis"] },
    { categoryKey: "skills.categories.testing", skills: ["JUnit", "Jest", "Mockito", "Cucumber", "Postman", "Swagger"] },
    { categoryKey: "skills.categories.tools", skills: ["Git", "GitLab", "GitHub", "Bitbucket", "Grafana", "Jira", "Trello", "RabbitMQ", "Kafka"] },
];

const Skills = () => {
    const { t } = useTranslation();
    
    return (
        <div>
            <h3 className="text-lg font-bold mb-3 uppercase tracking-wider">{t('skills.title')}</h3>
            <div className="flex flex-col space-y-2">
                {
                    skillCategories.map((cat) => (
                        <div key={cat.categoryKey}>
                            <span className="font-semibold text-sm">{t(cat.categoryKey)}: </span>
                            <span className="text-sm text-gray-300">
                              {cat.skills.join(', ')}
                            </span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Skills;