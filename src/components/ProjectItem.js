import React from 'react';
import {Link} from 'react-router-dom';
import './ProjectsItem.css';
import './Portfolio';

function ProjectItem(props) {
    return (
        <>
           <li className="projects_item">
               <Link className="projects_item_link" to={props.path}>
                   <figure className="projects_item_pic-wrap" 
                   data-category={props.label}>
                       <img src={props.src} alt='Project'
                       className="projects_item_img" />
                   </figure>
                   <div className='projects_item_info'>
                       <h5 className='cards_item_text' >{props.text}</h5>
                   </div>
               </Link>
            </li> 
        </>
    )
}

export default ProjectItem
