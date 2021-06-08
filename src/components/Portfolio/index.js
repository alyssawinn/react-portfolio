import React from 'react';
import Project from '../Project';

function Portfolio() {
    const projects = [
        {
            name: 'Plant Daddy0',
            img: require('../../assets/plants.jpg').default,
            repo: 'https://github.com/alyssawinn/plant-daddy',
            app: 'https://uofu-plant-daddy.herokuapp.com/',
        },
        {
            name: 'Plant Daddy1',
            img: require('../../assets/plants.jpg').default,
            repo: 'https://github.com/alyssawinn/plant-daddy',
            app: 'https://uofu-plant-daddy.herokuapp.com/',
        },
        {
            name: 'Plant Daddy2',
            img: require('../../assets/plants.jpg').default,
            repo: 'https://github.com/alyssawinn/plant-daddy',
            app: 'https://uofu-plant-daddy.herokuapp.com/',
        },
        {
            name: 'Plant Daddy3',
            img: require('../../assets/plants.jpg').default,
            repo: 'https://github.com/alyssawinn/plant-daddy',
            app: 'https://uofu-plant-daddy.herokuapp.com/',
        },
        {
            name: 'Plant Daddy4',
            img: require('../../assets/plants.jpg').default,
            repo: 'https://github.com/alyssawinn/plant-daddy',
            app: 'https://uofu-plant-daddy.herokuapp.com/',
        },
        {
            name: 'Plant Daddy5',
            img: require('../../assets/plants.jpg').default,
            repo: 'https://github.com/alyssawinn/plant-daddy',
            app: 'https://uofu-plant-daddy.herokuapp.com/',
        }
    ];
    
    return (
        <section>
            <h2>Projects.</h2>
            {projects.map((project) => (
               <Project project={project}></Project>
            ))}
        </section>
    )
}

export default Portfolio;