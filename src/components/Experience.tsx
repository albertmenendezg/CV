import React from 'react';
import { useTranslation } from 'react-i18next';
import { formatDate } from '../utils/format-date';

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
    <div className="mb-2">
      <div className="flex flex-row justify-between items-start">
        <div>
          <h3 className="font-bold text-sm leading-tight">{company}</h3>
          <p className="text-primary text-xs">{role}</p>
        </div>
        <p className="text-primary text-[10px] whitespace-nowrap ml-2">
          {formatDate(startDate)} - {formatDate(endDate)}
        </p>
      </div>

      <div className="mt-1 space-y-1.5">
        {projects.map((project) => (
          <div key={project.name} className="border-l border-gray-300 pl-2">
            <div className="flex flex-row justify-between items-baseline gap-2">
              <p className="font-semibold text-xs text-secondary">{project.name}</p>
              <p className="text-primary text-[10px] whitespace-nowrap">
                {formatDate(project.startDate)} - {formatDate(project.endDate)}
              </p>
            </div>
            <ul className="list-disc ml-3 mt-0.5">
              {project.tasks.map((task) => (
                <li key={task} className="text-[11px] text-primary leading-snug mb-0.5">
                  {task}
                </li>
              ))}
            </ul>
            <p className="text-[10px] text-primary leading-snug">
              <span className="font-semibold">{t('experience.techStack')}:</span> {project.techStack.join(', ')}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Experience = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2 className="text-lg font-bold mb-1">{t('experience.title')}</h2>
      <div className="flex flex-col">
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
                t('experience.tasks.peoplePlanner4'),
              ],
              techStack: ['Java', 'Spring Boot', 'Maven', 'RabbitMQ', 'PostgreSQL', 'Microsoft Azure', 'Grafana', 'SQL', 'OpenSpec', 'GitHub Copilot', 'Opencode'],
            },
            {
              name: 'Oysho Backoffice',
              startDate: new Date('2026-05-01'),
              endDate: new Date('2026-08-01'),
              tasks: [
                t('experience.tasks.oysho1'),
                t('experience.tasks.oysho2'),
                t('experience.tasks.oysho3'),
              ],
              techStack: ['React', 'GitHub Actions', 'Agentic AI', 'Claude Code', 'Opencode'],
            },
            {
              name: 'Codebench',
              startDate: new Date('2025-09-01'),
              endDate: new Date('2026-04-01'),
              tasks: [t('experience.tasks.codebench1'), t('experience.tasks.codebench2'), t('experience.tasks.codebench4')],
              techStack: ['Java', 'Spring Boot', 'RabbitMQ', 'Docker', 'Kubernetes', 'AWS', 'Python', 'GitLab CI'],
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
              tasks: [t('experience.tasks.feederHealth1'), t('experience.tasks.feederHealth2'), t('experience.tasks.feederHealth3')],
              techStack: ['NestJS', 'RabbitMQ', 'WebSockets', 'Socket.io', 'AWS', 'React', 'TypeScript', 'Bitbucket'],
            },
            {
              name: 'Feeder Metrics',
              startDate: new Date('2022-10-01'),
              endDate: new Date('2024-09-01'),
              tasks: [t('experience.tasks.feederMetrics1'), t('experience.tasks.feederMetrics2'), t('experience.tasks.feederMetrics3')],
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
      </div>
    </div>
  );
};

export default Experience;
