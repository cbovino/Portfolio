import React from 'react';
import Portrait from '.././img/Portrait.png'
import Image from 'react-bootstrap/Image'
import Resume from '.././img/Connor_Bovino_Resume.pdf'



export function About(props) {
  return (

    <div className='About'>
      <Image  src = {Portrait} roundedCircle />
      <a href={Resume} target = "_blank" rel="noopener noreferrer">Open Resume</a>
    </div>
  );
}
