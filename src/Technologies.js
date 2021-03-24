import React from 'react';
import Stack from './Stack';
import getTechnologies from './Details/Technologies-get';

export default function Technologies() {
    return (
      <div>
        <div className='container'>
          {
            getTechnologies().map(stack => (
              <Stack
               key={Stack.id}
               id={stack.id}
               name={stack.name}
               logo={stack.logo} />
            ))
          }
        </div>
      </div>
    );  
}

