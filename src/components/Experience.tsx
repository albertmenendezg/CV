import { useTranslation } from 'react-i18next';
import { FaBriefcase } from 'react-icons/fa6';
import { formatDate } from '../utils/format-date';
import { TimelineEntry, TimelineSection } from './Timeline';

interface IProject {
  name: string;
  startDate: Date;
  endDate: Date | 'Present';
  tasks: string[];
  techStack: string[];
}

interface IExperienceGroup {
  role: string;
  company: string;
  startDate: Date;
  endDate: Date | 'Present';
  projects: IProject[];
}

const ExperienceGroup = ({ role, company, startDate, endDate, projects }: IExperienceGroup) => {
  const { t } = useTranslation();

  return (
    <TimelineEntry period={`${formatDate(startDate)} - ${formatDate(endDate)}`}>
      <h3 className="text-[12px] leading-tight mb-1">
        <span className="font-bold text-secondary">{role}</span>
        <span className="text-gray-400 mx-1.5">·</span>
        <span className="font-medium text-gray-600">{company}</span>
      </h3>

      <div className="space-y-1.5">
        {projects.map((project) => (
          <div key={project.name} className="avoid-break ml-1.5 pl-2.5 border-l-2 border-slate-300">
            <div className="flex flex-row justify-between items-baseline gap-2">
              <p className="font-semibold text-[11px] text-secondary">{project.name}</p>
              <p className="text-gray-500 text-[9.5px] whitespace-nowrap">
                {formatDate(project.startDate)} - {formatDate(project.endDate)}
              </p>
            </div>
            <ul className="list-disc ml-4">
              {project.tasks.map((task) => (
                <li key={task} className="text-[10.5px] text-primary leading-snug">
                  {task}
                </li>
              ))}
            </ul>
            <p className="text-[10px] text-gray-600 leading-snug">
              <span className="font-semibold">{t('experience.techStack')}:</span> {project.techStack.join(', ')}
            </p>
          </div>
        ))}
      </div>
    </TimelineEntry>
  );
};

const Experience = () => {
  const { t } = useTranslation();

  return (
    <TimelineSection title={t('experience.title')} icon={FaBriefcase}>
      <ExperienceGroup
        role={t('experience.roles.backendEngineer')}
        company="Nter Tech Services"
        startDate={new Date('2025-05-01')}
        endDate="Present"
        projects={[
          {
            name: 'People Planner',
            startDate: new Date('2025-09-01'),
            endDate: 'Present',
            tasks: [
              t('experience.tasks.peoplePlanner1'),
              t('experience.tasks.peoplePlanner2'),
              t('experience.tasks.peoplePlanner3'),
            ],
            techStack: ['Java', 'Spring Boot', 'Maven', 'RabbitMQ', 'PostgreSQL', 'Microsoft Azure', 'Grafana', 'SQL', 'OpenSpec', 'GitHub Copilot', 'Opencode'],
          },
          {
            name: 'Oysho Backoffice',
            startDate: new Date('2026-05-01'),
            endDate: new Date('2026-08-01'),
            tasks: [t('experience.tasks.oysho1'), t('experience.tasks.oysho3')],
            techStack: ['React', 'GitHub Actions', 'Agentic AI', 'Claude Code', 'Opencode'],
          },
          {
            name: 'Codebench',
            startDate: new Date('2025-09-01'),
            endDate: new Date('2026-04-01'),
            tasks: [t('experience.tasks.codebench1'), t('experience.tasks.codebench2')],
            techStack: ['Java', 'Spring Boot', 'RabbitMQ', 'Docker', 'Kubernetes', 'AWS', 'Python', 'GitLab CI/CD'],
          },
        ]}
      />

      <ExperienceGroup
        role={t('experience.roles.backendDeveloper')}
        company="Feeder The Reaction SaaS"
        startDate={new Date('2022-10-01')}
        endDate={new Date('2025-04-01')}
        projects={[
          {
            name: 'Feeder Health',
            startDate: new Date('2024-09-01'),
            endDate: new Date('2025-04-01'),
            tasks: [t('experience.tasks.feederHealth1'), t('experience.tasks.feederHealth2')],
            techStack: ['NestJS', 'RabbitMQ', 'WebSockets', 'Socket.io', 'AWS', 'React', 'TypeScript', 'Bitbucket Pipelines'],
          },
          {
            name: 'Feeder Metrics',
            startDate: new Date('2022-10-01'),
            endDate: new Date('2024-09-01'),
            tasks: [t('experience.tasks.feederMetrics1'), t('experience.tasks.feederMetrics2')],
            techStack: ['Spring Boot', 'Java', 'NestJS', 'RabbitMQ', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'AWS'],
          },
        ]}
      />

      <ExperienceGroup
        role={t('experience.roles.fullstackDeveloper')}
        company="Foxize"
        startDate={new Date('2021-09-01')}
        endDate={new Date('2022-10-01')}
        projects={[
          {
            name: 'Foxize Cloud',
            startDate: new Date('2021-09-01'),
            endDate: new Date('2022-10-01'),
            tasks: [t('experience.tasks.foxize1'), t('experience.tasks.foxize2')],
            techStack: ['Symfony', 'PHP', 'Twig', 'JavaScript', 'MySQL', 'Docker', 'Linux', 'GitLab'],
          },
        ]}
      />
    </TimelineSection>
  );
};

export default Experience;
