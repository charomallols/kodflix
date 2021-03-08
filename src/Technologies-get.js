import react from './images/react-icon.svg';
import html5 from './images/html5-icon.svg';
import css3 from './images/css3-icon.svg';
import node from './images/node-icon.svg';
import mongo from './images/database-icon.svg';
import heroku from './images/heroku-icon.svg';

export default function getTechnologies() {
    return [
    {id: 'react', name:'React', logo: react } , 
    {id: 'html5', name: 'HTML5', logo: html5 },
    {id: 'css3', name: 'CSS3', logo: css3 },
    {id: 'node', name: 'Node', logo: node },
    {id: 'mongo', name: 'MongoDB', logo: mongo },
    {id: 'heroku', name: 'Heroku', logo: heroku }
    ];
  }