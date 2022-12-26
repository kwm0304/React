import React from 'react'
import quiz from '../../assets/quiz.png'
import scheduler from '../../assets/scheduler.png'
import weather from '../../assets/weather.png'
import generator from '../../assets/employee-generator.png'
import password from '../../assets/password.png'
import backend from '../../assets/backend.png'
import { FaGithub } from 'react-icons/fa'


function Projects() {
    const project = [
    {
        title: 'Weather App',
        link: 'https://kwm0304.github.io/Weather-App/',
        repo: 'https://github.com/kwm0304/Weather-App',
        description: "This weather app was made using javascript and basic fetch methods to return a 5-day forecast for cities in the U.S.",
        image: weather
    },
    {
        title: 'Quiz',
        link: 'https://kwm0304.github.io/Coding-quiz-app/',
        repo: 'https://github.com/kwm0304/Coding-quiz-app',
        description: "This simple quiz game was made with vanilla javascript.",
        image: quiz
    },
    {
        title: 'Work-Day-Scheduler',
        link: 'https://kwm0304.github.io/Day-Scheduler/',
        repo: 'https://github.com/kwm0304/Day-Scheduler',
        description: "Made using moment.js and jquery, this provides app provides a real-time work day schedule to keep the user on track.",
        image: scheduler
    },
    {
        title: 'Employee Generator',
        link: 'https://kwm0304.github.io/Employee-Generator/',
        repo: 'https://github.com/kwm0304/Employee-Generator',
        description: "This command line application generates an overview of a company's employees.",
        image: generator
    },
    {
        title: 'Random Password Generator',
        link: 'https://kwm0304.github.io/Random-Password-Generator/',
        repo: 'https://github.com/kwm0304/Random-Password-Generator',
        description: "This random password generator was made using vanilla javascript.",
        image: password
    },
    {
        title: 'Social Network API',
        link: 'https://github.com/kwm0304/Social-Network-API',
        repo: 'https://github.com/kwm0304/Social-Network-API',
        description:"This project constructed the backend for a social network site using express and mongoose.",
        image: backend
    }
];

return (
    <>
    {project.map(instance => (
      <div className="card">
      <div className="cardImgLink">
      <div className='cardTitle' key={instance.title}>
      <div>
        <a href={instance.link}><img className='cardImg' src={instance.image} style={{width: "33%"}}alt="weather forecast" /></a>
        </div>
      </div>
        <div className="card-description">
          {instance.description}
        </div>
        <a href={instance.repo}><FaGithub /></a>
        </div>
    </div>
    
))}
</>)
}

export default Projects