import { useTranslation } from 'react-i18next';

interface ISkillCategory {
    categoryKey: string;
    skills: string[];
}

const skillCategories: ISkillCategory[] = [
    { categoryKey: "skills.categories.backend", skills: ["Java", "Spring Boot", "TypeScript", "Node.js", "NestJS", "Python", "Go", "PHP"] },
    { categoryKey: "skills.categories.devops", skills: ["Docker", "Kubernetes", "AWS", "Microsoft Azure", "Linux", "Terraform", "GitHub Actions", "GitLab CI"] },
    { categoryKey: "skills.categories.ai", skills: ["Prompt Engineering", "Agents", "MCP", "OpenSpec", "GitHub Copilot", "Claude Code", "Opencode"] },
    { categoryKey: "skills.categories.frontend", skills: ["React", "Next.js", "Tailwind CSS"] },
    { categoryKey: "skills.categories.architecture", skills: ["DDD", "Hexagonal Architecture", "Microservices", "Event-Driven Architecture"] },
    { categoryKey: "skills.categories.databases", skills: ["SQL", "MySQL", "PostgreSQL", "MongoDB", "Redis"] },
    { categoryKey: "skills.categories.testing", skills: ["JUnit", "Jest", "Mockito", "Cucumber", "Postman", "Swagger"] },
    { categoryKey: "skills.categories.tools", skills: ["Git", "GitLab", "GitHub", "Bitbucket", "Grafana", "Jira", "RabbitMQ", "Kafka"] },
];

const Skills = () => {
    const { t } = useTranslation();
    
    return (
        <div>
            <h3 className="text-sm font-bold mb-2 uppercase tracking-wider">{t('skills.title')}</h3>
            <div className="flex flex-col space-y-1">
                {
                    skillCategories.map((cat) => (
                        <div key={cat.categoryKey}>
                            <span className="font-semibold text-xs">{t(cat.categoryKey)}: </span>
                            <span className="text-[11px] text-gray-300 leading-snug">
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