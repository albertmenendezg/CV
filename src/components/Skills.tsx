import { useTranslation } from 'react-i18next';
import SidebarSection from './SidebarSection';

interface ISkillCategory {
  categoryKey: string;
  skills: string[];
}

const skillCategories: ISkillCategory[] = [
  { categoryKey: 'skills.categories.backend', skills: ['Java', 'Spring Boot', 'TypeScript', 'Node.js', 'NestJS', 'Python', 'Go', 'PHP'] },
  { categoryKey: 'skills.categories.devops', skills: ['Docker', 'Kubernetes', 'AWS', 'Microsoft Azure', 'Linux', 'Terraform', 'GitHub Actions', 'GitLab CI'] },
  { categoryKey: 'skills.categories.ai', skills: ['Prompt Engineering', 'Agents', 'MCP', 'OpenSpec', 'GitHub Copilot', 'Claude Code', 'Opencode'] },
  { categoryKey: 'skills.categories.frontend', skills: ['React', 'Next.js', 'Tailwind CSS'] },
  { categoryKey: 'skills.categories.architecture', skills: ['DDD', 'Hexagonal Architecture', 'Microservices', 'Event-Driven Architecture'] },
  { categoryKey: 'skills.categories.databases', skills: ['SQL', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis'] },
  { categoryKey: 'skills.categories.testing', skills: ['JUnit', 'Jest', 'Mockito', 'Cucumber', 'Postman', 'Swagger'] },
  { categoryKey: 'skills.categories.tools', skills: ['Git', 'GitLab', 'GitHub', 'Bitbucket', 'Grafana', 'Jira', 'RabbitMQ', 'Kafka'] },
];

const Skills = () => {
  const { t } = useTranslation();

  return (
    <SidebarSection title={t('skills.title')}>
      <div className="space-y-1.5">
        {skillCategories.map((cat) => (
          <div key={cat.categoryKey}>
            <p className="text-[11px] font-semibold text-white">{t(cat.categoryKey)}</p>
            <p className="text-[10.5px] text-gray-200 leading-snug">{cat.skills.join(', ')}</p>
          </div>
        ))}
      </div>
    </SidebarSection>
  );
};

export default Skills;
