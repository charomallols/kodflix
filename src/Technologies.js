import React from 'react';
import Stack from './Stack.js';
import react from './images/react-icon.svg';
import html5 from './images/html5-icon.svg';
import css3 from './images/css3-icon.svg';
import node from './images/node-icon.svg';
import mongo from './images/database-icon.svg';
import heroku from './images/heroku-icon.svg';

export default function Technologies() {
    return (
      <div>
        <div className='container'>
          <Stack name='React' logo={react} />
          <Stack name='html5' logo={html5} />
          <Stack name='CSS3' logo={css3} />
        </div>
        <div className='container'>
          <Stack name='Node' logo={node} />
          <Stack name='Mongo' logo={mongo} />
          <Stack name='Heroku' logo={heroku} />
        </div>
      </div>
    )
}