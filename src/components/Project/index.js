import React from 'react';

const Project = (props) => {

    const { project } = props;

    return (
        <div>
            <h3><a href="{project.repo}">{project.name}</a></h3>
            <a href="{project.app}" target="_blank">
                <img src={project.img} />
                </a>
        </div>
    );
};

export default Project;