import React from 'react';
import './projects.scss';

export interface iProject {
    title: string;
    descriptions: string[];
    startDate?: string;
    endDate?: string;
}
function Projects(props: iProject) {
        const duration:string = `${props.startDate} ${(!!props.endDate) ? '- '+props.endDate:'- current'}`; 
        return (
        <div className='project-container'>
            <div className='title-container'>
                <h1>{props.title}</h1>
                <span>{duration}</span>
            </div>
            
            <div className='description-container'>
                <ul>
                {
                    props.descriptions.map( (description: string) =>
                        <li key={description}>{description}</li>
                    )
                }
                </ul>
                
                
            </div>
        </div>);
}
export default Projects;