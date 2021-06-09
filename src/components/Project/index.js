import React from 'react';

const Project = (props) => {

    const { project } = props;

    return (
        <div>
            <h3><a href={project.repo} target="_blank" rel="noreferrer">{project.name}</a></h3>
            <a href={project.app} target="_blank" rel="noreferrer">
                <img src={project.img} alt="" />
                </a>
        </div>
    );
};

export default Project;