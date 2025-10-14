import React from 'react';

interface IEducationItem {
    title: string;
    description: string;
    technologies: string[];
    institution: string;
    startDate: Date;
    endDate: Date|"Present";
    city: string;
}
const EducationItem = (props: IEducationItem) => {
    const { title, institution, description, technologies, startDate, endDate, city} = props;

    const formatedDate = (date: Date | "Present") => {
        if (date === "Present") return "Present";

        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        return monthNames[date.getUTCMonth()] + ' ' + date.getUTCFullYear();
    }

    return (
        <div>
            <h2 className="text-xl font-bold">{title}</h2>
            <h2 className="text-lg">{institution}</h2>
            <div className="flex flex-row justify-between text-sm text-cyan-700 italic">
                <p>{formatedDate(startDate)} - {formatedDate(endDate)}</p>
                <p>{city}</p>
            </div>
            <div>
                <p className="text-sm">{ description }</p>
                <h3 className="text-cyan-700 italic">Technologies</h3>
                <p>
                    {
                        technologies.map((t, index) => (
                            <span className="text-sm" key={t}>{t}{index < technologies.length - 1 ? ', ' : ''}</span>
                        ))
                    }
                </p>
            </div>
        </div>
    );
}

const Education = () => {
    return (
        <div className="pt-5 px-5">
            <h2 className="text-cyan-700 text-2xl font-bold underline">Education</h2>
            <div className="flex flex-col pt-2 gap-4">
                <EducationItem
                    title="Multiplatform Application Development"
                    institution="DigitechFp"
                    description="Program focused on developing and acquiring knowledge of multiplatform applications using modern technologies, including mobile apps, CRM & ERP systems, business applications, and frontend & backend web development."
                    technologies={["Java", "Android", "Kotlin", "JavaScript", "TypeScript", "HTML", "CSS", "Python", "MySql"]}
                    city="Remotely"
                    startDate={new Date("2025-10-01")}
                    endDate="Present"
                />
                <div className="h-14"></div>
                <EducationItem
                    title="Devops & Cloud Program"
                    institution="UNIR"
                    description="Program focused on modern DevOps practices and cloud infrastructure management. Gained practical experience with CI/CD pipelines using Jenkins, automated testing, and infrastructure as code principles. Worked extensively with Python, Docker, Kubernetes, and GitOps workflows. Proficient in using version control with Git and GitHub, and managing cloud services on AWS and Microsoft Azure. Trained to deploy, monitor, and scale applications in cloud-native environments, emphasizing reliability, automation, and continuous delivery."                    technologies={["Jenkins", "Testing", "Python", "AWS", "Microsoft Azure", "Git", "Github", "Docker", "Kubernetes", "GitOps"]}
                    city="Remotely"
                    startDate={new Date("2025-03-01")}
                    endDate={new Date("2025-10-01")}
                />
                <EducationItem
                    title="Web Application Development"
                    institution="Stucom"
                    description="During the program, I acquired solid knowledge of programming languages such as Java, JavaScript, and PHP, as well as the use of technologies and tools such as Git, MySQL, MongoDB, HTML, CSS, and the Symfony framework. I was able to develop comprehensive client and server-side applications, with a focus on good programming practices, version control, and relational and non-relational database management."
                    technologies={["Java", "JavaScript", "TypeScript", "Php", "Git", "MySql", "MongoDB", "HTML", "CSS", "Symfony"]}
                    city="Barcelona"
                    startDate={new Date("2020-09-01")}
                    endDate={new Date("2022-06-01")}
                />
            </div>
        </div>
    );
};

export default Education;