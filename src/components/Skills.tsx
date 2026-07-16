interface ISkillCategory {
    category: string;
    skills: string[];
}

const skillCategories: ISkillCategory[] = [
    { category: "Backend", skills: ["Java", "SpringBoot", "Typescript", "NodeJS", "NestJs", "Python", "Go", "Php"] },
    { category: "DevOps / Cloud", skills: ["Docker", "Kubernetes", "AWS", "Linux", "Terraform", "GitHub Actions", "GitLab CI"] },
    { category: "AI", skills: ["Prompt", "Agents", "MCPs", "Skills", "Codex", "Claude", "OpenCode"] },
    { category: "Frontend", skills: ["ReactJS", "NextJS", "TailwindCSS"] },
    { category: "Architecture / Design", skills: ["Domain Driven Design", "Hexagonal Architecture", "Microservices", "Event Driven Architecture"] },
    { category: "Databases", skills: ["SQL", "MySQL", "PostgresSql", "MongoDB", "Redis"] },
    { category: "Testing", skills: ["JUnit", "Jest", "Mockito", "Cucumber", "Postman", "Swagger"] },
    { category: "Tools", skills: ["Git", "GitLab", "GitHub", "Bitbucket", "Grafana", "Jira", "Trello", "RabbitMQ", "Kafka"] },
];

const Skills = () => {
    return (
        <div>
            <h3 className="text-lg font-bold mb-3 uppercase tracking-wider">Skills</h3>
            <div className="flex flex-col space-y-2">
                {
                    skillCategories.map((cat) => (
                        <div key={cat.category}>
                            <span className="font-semibold text-sm">{cat.category}: </span>
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