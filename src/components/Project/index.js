import React from 'react';

const Project = () => {
    
    const projects = [
        {
            name: 'Plant Daddy0',
            img: '../assets/plants.jpg',
            repo: 'https://github.com/alyssawinn/plant-daddy',
            app: 'https://uofu-plant-daddy.herokuapp.com/',
        },
        {
            name: 'Plant Daddy1',
            img: '../assets/plants.jpg',
            repo: 'https://github.com/alyssawinn/plant-daddy',
            app: 'https://uofu-plant-daddy.herokuapp.com/',
        },
        {
            name: 'Plant Daddy2',
            img: '../assets/plants.jpg',
            repo: 'https://github.com/alyssawinn/plant-daddy',
            app: 'https://uofu-plant-daddy.herokuapp.com/',
        },
        {
            name: 'Plant Daddy3',
            img: '../assets/plants.jpg',
            repo: 'https://github.com/alyssawinn/plant-daddy',
            app: 'https://uofu-plant-daddy.herokuapp.com/',
        },
        {
            name: 'Plant Daddy4',
            img: '../assets/plants.jpg',
            repo: 'https://github.com/alyssawinn/plant-daddy',
            app: 'https://uofu-plant-daddy.herokuapp.com/',
        },
        {
            name: 'Plant Daddy5',
            img: '../assets/plants.jpg',
            repo: 'https://github.com/alyssawinn/plant-daddy',
            app: 'https://uofu-plant-daddy.herokuapp.com/',
        }
    ];

    return (
        <div>
            {projects.forEach(project => (
                <img
                src={project.img}
                alt={project.name}
                key={project.name}
                />
            ))}
        </div>
    )
}

export default Project;