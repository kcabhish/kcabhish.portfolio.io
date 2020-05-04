import React, { useState, useCallback} from 'react';
import Skills from '../skills/skills';
import Projects, { iProject } from '../projects/projects';
import './portfolio.scss';
import CustomModal from '../../common/CustomModal';
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
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Creates a call back function using useCallback hook
    const callbackFunction = useCallback((updatedVal) => {
        setIsModalOpen(updatedVal);
        return isModalOpen;
      }, [isModalOpen]);

    console.log("From Portfolio" + isModalOpen);
    // Email will only be rendered if the user has provided the email information.
    const subSection1 = (!!props.email) ? `Email : ${props.email}` : null;
    // This will populate the subsection2 contents for the header on the resume based upon the available
    // contents
    const subSection2 = () => {
        let subsection2Content = null;
            subsection2Content = (!!props.address) ? props.address : null;
        if (!!props.city) {
            subsection2Content += (!!subsection2Content) ? ", " : null;
            subsection2Content += props.city;
        }
        if (!!props.state) {
            subsection2Content += (!!subsection2Content) ? ", " : null;
            subsection2Content += props.state;
        }
        if (!!props.zip) {
            subsection2Content += (!!subsection2Content) ? ", " : null;
            subsection2Content += props.zip;
        }
        return subsection2Content;
    }
    
    

    const EditHeader = () => {
        console.log('what the duce' + isModalOpen)
        return (
            <div>
            <CustomModal title="Edit Header" isModalOpen={isModalOpen} callback={callbackFunction}>
                <div>
                    This is to edit the section
                </div>
            </CustomModal>
            </div>

        );
    }

    return (
        <React.Fragment>
        <div className='portfolio-container'>
            <div className='title-container' onDoubleClick={() => setIsModalOpen(true)}>
                <h1>{props.name}</h1>
                { (!!subSection1) && <h5>{subSection1}</h5>}
                { (!!subSection2) && <h5>{props.address}, {props.city}, {props.state}, {props.zip} </h5>}
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
        {isModalOpen && <EditHeader></EditHeader>}
        </React.Fragment>
    );
}

export default Portfolio;