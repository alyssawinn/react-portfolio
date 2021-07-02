import React from 'react';
import Project from '../Project';

function Portfolio() {
    const projects = [
        {
            name: "Savannah's Sweets",
            img: require('../../assets/sweets.PNG').default,
            repo: 'https://github.com/Ryobia/Savannahs-Sweets',
            app: 'https://dudley-doright-93373.herokuapp.com/',
        },
        {
            name: 'Plant Daddy',
            img: require('../../assets/plantdaddy.PNG').default,
            repo: 'https://github.com/alyssawinn/plant-daddy',
            app: 'https://uofu-plant-daddy.herokuapp.com/',
        },
        {
            name: 'A Night In',
            img: require('../../assets/anightin.PNG').default,
            repo: 'https://github.com/alyssawinn/a-night-in',
            app: 'https://alyssawinn.github.io/a-night-in/',
        },
        {
            name: 'Budget Tracker',
            img: require('../../assets/budgettracker.PNG').default,
            repo: 'https://github.com/alyssawinn/pwa-budget-tracker',
            app: 'https://winn-pwa-budget-tracker.herokuapp.com/',
        },
        {
            name: 'Employee Tracker',
            img: require('../../assets/employeetracker.PNG').default,
            repo: 'https://github.com/alyssawinn/employee-tracker',
            app: '',
        },
        {
            name: 'Password Generator',
            img: require('../../assets/passwordgenerator.PNG').default,
            repo: 'https://github.com/alyssawinn/password-generator',
            app: 'https://alyssawinn.github.io/password-generator/',
        },
        {
            name: 'Timed Coding Quiz',
            img: require('../../assets/timedquiz.PNG').default,
            repo: 'https://github.com/alyssawinn/timed-code-quiz',
            app: 'https://alyssawinn.github.io/timed-code-quiz/',
        },
        {
            name: 'Taskinator',
            img: require('../../assets/taskinator.PNG').default,
            repo: 'https://github.com/alyssawinn/taskinator',
            app: 'https://alyssawinn.github.io/taskinator/',
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