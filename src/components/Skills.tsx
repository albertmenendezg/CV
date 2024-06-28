import React from 'react';
import {FaStar, FaStarHalfAlt} from "react-icons/fa";


interface ISkillItem {
    name: string,
    score: number
}

const SkillItem = (props: ISkillItem) => {
    const { name, score } = props;

    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= score) {
                stars.push(<FaStar key={i} />);
            } else if (i === Math.ceil(score) && !Number.isInteger(score)) {
                stars.push(<FaStarHalfAlt key={i} />);
            } else {
                stars.push(<FaStar key={i} className="text-gray-300" />);
            }
        }
        return stars;
    };

    return (
        <div className="flex flex-row">
            <div className="w-1/2">
                <h2>{name}</h2>
            </div>
            <div className="w-1/2 flex flex-row space-x-3">
                {renderStars()}
            </div>
        </div>
    );
}
const Skills = () => {
    return (
        <div className="pt-10 px-5">
            <h2 className="text-cyan-700 text-2xl font-bold underline">Skills</h2>
            <div className="flex flex-col mt-2 space-y-2">
                <SkillItem name="Php" score={5}/>
                <SkillItem name="JavaScript" score={5}/>
                <SkillItem name="TypeScript" score={4}/>
                <SkillItem name="Java" score={3.5}/>
                <SkillItem name="Symfony" score={5}/>
                <SkillItem name="NestJs" score={4}/>
                <SkillItem name="Python" score={3}/>
                <SkillItem name="MySQL" score={4}/>
                <SkillItem name="NodeJS" score={4}/>
                <SkillItem name="CSS" score={3}/>
                <SkillItem name="ReactJS" score={4}/>
                <SkillItem name="TailwindCSS" score={4}/>
                <SkillItem name="RabbitMQ" score={4}/>
                <SkillItem name="Domain-Driven-Design" score={5}/>
                <SkillItem name="Hexagonal" score={5}/>
                <SkillItem name="Microservices" score={4}/>
                <SkillItem name="Linux" score={4}/>
            </div>
        </div>
    );
};

export default Skills;