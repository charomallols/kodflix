import react from './images/react-icon.svg';
import html5 from './images/html5-icon.svg';
import css3 from './images/css3-icon.svg';
import node from './images/node-icon.svg';
import mongo from './images/database-icon.svg';
import heroku from './images/heroku-icon.svg';

export default function getTechnologies() {
    return [
    {id: 'react', name:'React', logo: react, details: 'A JavaScript library for building user interfaces' },
    {id: 'html5', name: 'HTML5', logo: html5, details: 'HTML, siglas en inglés de HyperText Markup Language, hace referencia al lenguaje de marcado para la elaboración de páginas web' },
    {id: 'css3', name: 'CSS3', logo: css3, details: 'CSS (siglas en inglés de Cascading Style Sheets), en español «Hojas de estilo en cascada», es un lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado' },
    {id: 'node', name: 'Node', logo: node, details: 'Node es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación JavaScript' },
    {id: 'mongo', name: 'MongoDB', logo: mongo, details: 'MongoDB es un sistema de base de datos NoSQL, orientado a documentos y de código abierto. En lugar de guardar los datos en tablas, tal y como se hace en las bases de datos relacionales, MongoDB guarda estructuras de datos BSON con un esquema dinámico, haciendo que la integración de los datos en ciertas aplicaciones sea más fácil y rápida' },
    {id: 'heroku', name: 'Heroku', logo: heroku, details: 'Heroku es una plataforma como servicio de computación en la Nube que soporta distintos lenguajes de programación' }
    ];
  }