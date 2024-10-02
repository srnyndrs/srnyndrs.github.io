import React from 'react';
import { FaLock } from "react-icons/fa";
import { GrInProgress } from "react-icons/gr";

const ProjectCard = (props) => {
  return (
    <div className="card w-full md:w-80 bg-base-200">
        <figure>
            <img src={process.env.PUBLIC_URL + `/projects/${props.image}`} alt={`${props.name} logo`}/>
        </figure>
        <div className="card-body">
            <h2 className="card-title items-center min-h-10">
                <a className={(props.link) ? "link-hover" : ""} href={props.link} rel="noreferrer" target='_blank'>{props.name}</a>
                { props.inProgress && 
                    <div className="tooltip" data-tip="in progress">
                        <GrInProgress size={18} />
                    </div>
                }
                { (!props.link && !props.inProgress)  &&
                    <div className="tooltip" data-tip="private">
                        <FaLock size={18}/>
                    </div>
                }
            </h2>
            
            <p className="text-neutral-300">{props.description}</p>
            
        </div>
    </div>
  );
}

export default ProjectCard;