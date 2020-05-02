import React from 'react';
import Skills from '../skills/skills';
import Projects, { iProject } from '../projects/projects';
import './portfolio.scss';
/**
 * Interface for the portfolio component
 */
export interface IPortfolio {
    name: string;
    address?: string;
    city?: string;
    state?: string;
    zip?: string;
    phone?: string;
    email?: string;
    projects?: iProject[];
}

/**
 * Functional component for the Portfolio.
 * This will act as the data entry point for the component. The data will be passed in 
 * here from the props and will subsiquently pass the values down to the child component.
 * @param props 
 */
function Portfolio (props: any) {
    return (
        <div className='portfolio-container'>
            <div className='title-container'>
                <h1>{props.name}</h1>
                <h5>{`Email : ${props.email}`}</h5>
                <h5>{props.address}, {props.city}, {props.state}, {props.zip} </h5>
            </div>
            <div className='skill-container'>
                <Skills></Skills>
            </div>
            <div className='projects-container'>
                <h1>Projects</h1>
                {
                    (props.projects.length>0 ) && props.projects.map( (project:iProject) => <Projects key={project.title} {...project}></Projects> )
                }
            </div>
        </div>
    );
}

export default Portfolio;