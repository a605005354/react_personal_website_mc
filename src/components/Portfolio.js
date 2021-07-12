import React from 'react';
import ProjectItem from './ProjectItem';
import './ProjectsItem.css';

function Portfolio() {
    return (
        <div className='projects'>
            <h1>Check out my github for more information:   
                <a href='https://github.com/a605005354'> Here </a></h1>
            <div className='projects_container'>
                <div className='projects_wrapper'>
                    <div className='projects_item'>
                        <ProjectItem 
                        src="../images/img-2.jpg"
                        text="Check this project"
                        label="New"
                        
                        />
                        <ProjectItem 
                        src="../images/img-2.jpg"
                        text="Check this project"
                        label="New"
                        
                        />
                        <ProjectItem 
                        src="../images/img-2.jpg"
                        text="Check this project"
                        label="New"
                        
                        />
                        <ProjectItem 
                        src="../images/img-2.jpg"
                        text="Check this project"
                        label="New"
                        
                        />
                    </div>
                </div>
            </div>           
        </div>
    )
}

export default Portfolio;
