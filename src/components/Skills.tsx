interface ISkillCategory {
    category: string;
    skills: string[];
}

const skillCategories: ISkillCategory[] = [
    { category: "Backend", skills: ["Java", "SpringBoot", "Typescript", "NodeJS", "NestJs", "Python", "Go", "Php"] },
    { category: "DevOps / Cloud", skills: ["Docker", "Kubernetes", "AWS", "Linux", "Terraform", "RabbitMQ", "Kafka"] },
    { category: "Frontend", skills: ["ReactJS", "NextJS", "TailwindCSS"] },
    { category: "Architecture / Design", skills: ["Domain Driven Design", "Hexagonal Architecture", "Microservices"] },
    { category: "Databases", skills: ["SQL", "MySQL", "PostgresSql", "MongoDB", "Redis"] },
    { category: "Testing", skills: ["JUnit", "Jest", "Mockito", "Cucumber", "Postman", "Swagger"] },
    { category: "Tools", skills: ["Git", "GitLab", "GitHub", "Bitbucket", "Grafana", "Jira", "Trello"] },
];

const Skills = () => {
    return (
        <div>
            <h2 className="text-cyan-700 text-2xl font-bold underline">Skills</h2>
            <div className="flex flex-col mt-2">
                {
                    skillCategories.map((cat) => (
                        <div key={cat.category}>
                            <span className="font-semibold text-lg">{cat.category}: </span>
                            <span>
                              {cat.skills.join(', ')}.
                            </span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Skills;