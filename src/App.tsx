import type React from 'react';
import { useTranslation } from 'react-i18next';
import type { IconType } from 'react-icons';
import { FaEnvelope, FaGithub, FaLinkedin, FaLocationDot, FaPhone } from 'react-icons/fa6';
import Header from './components/Header';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Languages from './components/Languages';
import SidebarSection from './components/SidebarSection';

interface IContactItem {
  icon: IconType;
  label: string;
  value: React.ReactNode;
  href?: string;
}

const ContactItem = ({ icon: Icon, label, value, href }: IContactItem) => (
  <div className="flex items-start gap-2">
    <Icon className="text-gray-300 text-[12px] mt-[2px] shrink-0" />
    <div className="min-w-0">
      <p className="text-[11px] font-semibold text-white leading-tight">{label}</p>
      {href ? (
        <a href={href} className="text-[10.5px] text-gray-200 break-words leading-snug">{value}</a>
      ) : (
        <p className="text-[10.5px] text-gray-200 leading-snug">{value}</p>
      )}
    </div>
  </div>
);

const App = () => {
  const { t } = useTranslation();

  return (
    <main className="cv-page w-[210mm] min-h-[297mm] mx-auto flex bg-white text-secondary leading-tight">
      <aside className="w-[34%] bg-[#2e3d4f] text-white flex flex-col">
        <div className="flex justify-center pt-6">
          <img
            src="profile_photo.jpg"
            alt="Albert Menéndez González"
            className="w-[120px] h-[120px] rounded-full object-cover object-top border-[3px] border-white/80"
          />
        </div>

        <div className="px-5 pt-5 pb-4">
          <SidebarSection title={t('contact.title')}>
            <div className="space-y-2">
              <ContactItem icon={FaEnvelope} label={t('contact.email')} value="albertmenendezg@gmail.com" href="mailto:albertmenendezg@gmail.com" />
              <ContactItem icon={FaPhone} label={t('contact.phone')} value="(+34) 678 630 197" href="tel:+34678630197" />
              <ContactItem icon={FaLocationDot} label={t('contact.locationLabel')} value={t('contact.location')} />
              <ContactItem
                icon={FaLinkedin}
                label="LinkedIn"
                value={<>linkedin.com/in/<wbr />albert-menendez-gonzalez</>}
                href="https://www.linkedin.com/in/albert-menendez-gonzalez"
              />
              <ContactItem icon={FaGithub} label="GitHub" value="github.com/albertmenendezg" href="https://github.com/albertmenendezg" />
            </div>
          </SidebarSection>

          <Languages />
          <Skills />
        </div>
      </aside>

      <div className="w-[66%] px-6 pt-5 pb-3">
        <Header />
        <Experience />
        <Education />
      </div>
    </main>
  );
};

export default App;
